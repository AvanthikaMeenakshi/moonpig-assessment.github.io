import React, { useState } from 'react';
import { Image } from '../types/Card';
import {FcNext, FcPrevious} from 'react-icons/fc';

const ImageCarousel = ({ images } : { images: Image[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleClick = (goTo: number) => {
    setCurrentIndex(currentIndex + goTo)
  }

  const isFirstImage = currentIndex === 0;
  const isLastImage = images.length - 1 === currentIndex;
  return (
    <div data-testid='carousel' className="img-carousel">
      <button data-testid='goto-previous-image' className='carousel-buttons' disabled={isFirstImage} onClick={() => handleClick(-1)}>
        <FcPrevious />
      </button>
      <div className='image-container'>
        <div className='image-display'>
          <img data-testid='preview-img' src={images[currentIndex].ImageUrl} />
        </div>
        <div data-testid='dotted-toggle-option' className='dotted-toggle'>
          {images.map((image, index) => (<button
            onClick={() => setCurrentIndex(index)}
            style={{ backgroundColor: index === currentIndex ? '#ce3356' : '#ffd7df' }}
            key={`dotted-toggle-${image.ImageNo}`}
            data-testid='dotted-toggle-buttons'
            className='dotted-toggle-buttons'
          />))}
        </div>
      </div>
      <button data-testid='goto-next-image' className='carousel-buttons' disabled={isLastImage} onClick={() => handleClick(1)}>
        <FcNext />
      </button>
    </div>
  )
}

export default ImageCarousel