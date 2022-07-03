import React from 'react'
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import ListCards from "./";
import { faker } from '@faker-js/faker';
import { act } from 'react-dom/test-utils';

const ProductsStore = Array.from(Array(10).keys()).map((num) => ({
  Title: faker.commerce.productName(),
  ProductId: `product-${num}`,
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

// 1. Write error handling
// 2. Search function
// 3. Fix act errors in test cases

describe('List cards component', () => {
  test('Component displays bunch of cards on page load', async () => {
    act(() => {
      render(<ListCards />)
    })
    await waitFor(() => screen.findByTestId('cards-list'));
    const cards = screen.getAllByTestId('card-info')
    expect(cards).toHaveLength(10)
  });
  test('Component displays bunch of cards on page load', async () => {
    (fetch as jest.Mock).mockImplementationOnce(() => Promise.reject({ message: 'Something went wrong' }))
    act(() => {
      render(<ListCards />)
    })
    await waitFor(() => screen.findByTestId('error-msg'));
    expect(screen.getByTestId('error-msg').textContent).toBe('Sorry, we are currently encountering issues, we‘ll be back soon!')
  });
})