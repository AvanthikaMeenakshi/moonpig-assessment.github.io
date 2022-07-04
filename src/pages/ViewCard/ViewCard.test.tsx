import React from 'react'
import { cleanup, fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { faker } from '@faker-js/faker';
import { act } from 'react-dom/test-utils';
import ViewCard from '../ViewCard';

const CardInfo = {
  Title: faker.commerce.productName(),
  ProductId: `product-id`,
  MoonpigProductNo: faker.unique(faker.name.firstName),
  ProductImage: {
    Link: {
      Href: faker.image.imageUrl()
    }
  },
  ImageUrls: Array.from(Array(3).keys()).map((num: number, index) => ({ ImageNo: index, ImageUrl: `http://preview-image-${num}` }))
}

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ ...CardInfo }),
  }),
) as jest.Mock;

afterEach(() => cleanup)

describe('View card component', () => {
  test('Fetches and displays card information on page load', async () => {
    act(() => {
      render(<ViewCard />)
    })
    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));
    expect(screen.getByTestId('card-view-container')).toBeDefined()
    expect(screen.getByTestId('title')).toBeDefined()
  });

  test('Displays images in carousel - Shows the first image by default', async () => {
    act(() => {
      render(<ViewCard />)
    })
    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));
    // Displays the first image in array in preview and has previous button disabled
    const imageElement = screen.getByTestId('preview-img') as HTMLImageElement
    expect(imageElement.src).toBe('http://preview-image-0/')
  });

  test('When we display the first image, go to previous image is disabled', async () => {
    act(() => {
      render(<ViewCard />)
    })
    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));
    
    const goToPreviousImg = screen.getByTestId('goto-previous-image') as HTMLButtonElement

    expect(goToPreviousImg.disabled).toBeTruthy()
  });

  test('Can toggle to next image using next button, enables go to previous image', async () => {
    act(() => {
      render(<ViewCard />)
    })
    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));
    
    const goToNextImage = screen.getByTestId('goto-next-image') as HTMLButtonElement
    const goToPreviousImg = screen.getByTestId('goto-previous-image') as HTMLButtonElement

    fireEvent.click(goToNextImage)

    const imageElement = screen.getByTestId('preview-img') as HTMLImageElement
    expect(imageElement.src).toBe('http://preview-image-1/')
    expect(goToPreviousImg.disabled).toBeFalsy()
  });

  test('If we are end of image preview, disables go to next image button', async () => {
    act(() => {
      render(<ViewCard />)
    })
    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));
    const goToNextImage = screen.getByTestId('goto-next-image') as HTMLButtonElement
    const imageElement = screen.getByTestId('preview-img') as HTMLImageElement

    fireEvent.click(goToNextImage)
    expect(imageElement.src).toBe('http://preview-image-1/')

    fireEvent.click(goToNextImage)
    expect(imageElement.src).toBe('http://preview-image-2/')

    expect(goToNextImage.disabled).toBeTruthy()
  })

  test('Go to previous image, shows the previous image on preview', async () => {
    act(() => {
      render(<ViewCard />)
    })
    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));
    const goToNextImage = screen.getByTestId('goto-next-image') as HTMLButtonElement
    const imageElement = screen.getByTestId('preview-img') as HTMLImageElement
    const goToPreviousImg = screen.getByTestId('goto-previous-image') as HTMLButtonElement

    fireEvent.click(goToNextImage)
    expect(imageElement.src).toBe('http://preview-image-1/')

    fireEvent.click(goToPreviousImg)
    expect(imageElement.src).toBe('http://preview-image-0/')
  })

  test('Can also use dotted toggle to toggle through the images', async () => {
    act(() => {
      render(<ViewCard />)
    })
    await waitForElementToBeRemoved(() => screen.getByTestId('loading'));
    const imageElement = screen.getByTestId('preview-img') as HTMLImageElement
    expect(screen.getByTestId('dotted-toggle-option')).toBeDefined()
    expect(screen.getAllByTestId('dotted-toggle-buttons')).toHaveLength(3)

    expect(imageElement.src).toBe('http://preview-image-0/')

    fireEvent.click(screen.getAllByTestId('dotted-toggle-buttons')[2])
    expect(imageElement.src).toBe('http://preview-image-2/')
  })
})
