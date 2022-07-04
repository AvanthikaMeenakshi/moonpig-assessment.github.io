import React from 'react'
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import ListCards from "./";
import { faker } from '@faker-js/faker';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockUseNavigate,
}));

const ProductsStore = Array.from(Array(40).keys()).map((num) => ({
  Title: `Happy me- ${faker.commerce.productName()}`,
  ProductId: `product-${num}`,
  MoonpigProductNo: `product-${num}`,
  ProductImage: {
    Link: {
      Href: faker.image.imageUrl()
    }
  }
}))

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ Products: ProductsStore }),
  }),
) as jest.Mock;

afterEach(cleanup)

const renderComponent = (searchString?: string) => {
  render(
    <MemoryRouter initialEntries={[`/${searchString}`]}>
      <ListCards />
    </MemoryRouter>
  )
}

describe('List cards component', () => {
  test('Component displays bunch of cards on page load', async () => {
    act(() => {
      renderComponent()
    })
    await waitFor(() => screen.findByTestId('cards-list'));
    const cards = screen.getAllByTestId('card-info')
    expect(cards).toHaveLength(20)
  });
  test('Component displays bunch of cards on page load', async () => {
    (fetch as jest.Mock).mockImplementationOnce(() => Promise.reject({ message: 'Something went wrong' }))
    act(() => {
      renderComponent()
    })
    await waitFor(() => screen.findByTestId('error-msg'));
    expect(screen.getByTestId('error-msg').textContent).toBe('Sorry, we are currently encountering issues, we‘ll be back soon!')
  });
  test('It redirects to card view page with image ID', async () => {
    act(() => {
      renderComponent()
    })
    await waitFor(() => screen.findByTestId('cards-list'));
    const card = screen.getAllByTestId('card-info')[0]
    fireEvent.click(card)
    expect(mockUseNavigate).toHaveBeenCalled()
    expect(mockUseNavigate).toHaveBeenCalledWith('/card/product-0')
  });
})

describe('List cards - Pagination', () => {
  test('On scrolling, it displays next 20 images', async () => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 900,
    });
    act(() => {
      renderComponent()
    })

    // Initial load, displays 20 images
    await waitFor(() => screen.findByTestId('cards-list'));
    expect(screen.getAllByTestId('card-info').length).toBe(20)

    // When scrolled, fetches the next 20
    await act(async () => {
      fireEvent.scroll(window, { target: { scrollY: 100 } })
      // Waiting for 2 sec so pagination callback is called
      await new Promise((r) => setTimeout(r, 2000));
    });
    expect(screen.getAllByTestId('card-info').length).toBe(40)
  });
}) 

describe('List cards - Searching', () => {
  test('On entering search key, it filters through data, displays nothing found message on 0 matches', async () => {
    act(() => {
      renderComponent('?searchKey=apple')
    })

    // Initial load, displays 20 images
    await waitFor(() => screen.findByTestId('cards-list'));
    expect(screen.getByTestId('results-info').textContent).toBe('Found 0 results related to apple')
  });
  test('On entering search key, it filters through data, displays first set of data that matches ', async () => {
    act(() => {
      renderComponent('?searchKey=happy')
    })

    await waitFor(() => screen.findByTestId('cards-list'));
    expect(screen.getByTestId('results-info').textContent).toBe('Found 40 results related to happy')
    expect(screen.getAllByTestId('card-info').length).toBe(20)
  });
  test('On scrolling, reveals more matches ', async () => {
    act(() => {
      renderComponent('?searchKey=happy')
    })

    await waitFor(() => screen.findByTestId('cards-list'));
    expect(screen.getByTestId('results-info').textContent).toBe('Found 40 results related to happy')
    expect(screen.getAllByTestId('card-info').length).toBe(20)

    await act(async () => {
      fireEvent.scroll(window, { target: { scrollY: 100 } })
      // Waiting for 2 sec so pagination callback is called
      await new Promise((r) => setTimeout(r, 2000));
    });
    expect(screen.getAllByTestId('card-info').length).toBe(40)
  });
}) 