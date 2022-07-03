import React, { useEffect, useState } from 'react';
import usePagination from '../../hooks/usePagination';
import { Product } from '../../types/Card';
import { BiMessageError } from 'react-icons/bi';

type PageInfo = {
  currentPage: number
  entriesPerPage: number
}

function ListCards() {
  const [cards, setCards] = useState<Product[]>([]);
  const [error, setIsError] = useState<boolean>(false);
  
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    currentPage: 1,
    entriesPerPage: 20
  });

  const [isFetching, setIsFetching] = usePagination(fetchMoreCards, cards, pageInfo.entriesPerPage);

  function fetchMoreCards() {
    setTimeout(() => {
      setPageInfo((previousState) => {
        const currentPage = previousState.currentPage + 1;
        return ({
          currentPage,
          entriesPerPage: currentPage * 20
        })
      })
      setIsFetching(false)
    }, 2000)
  }
  
  useEffect(() => {
    fetch('https://moonpig.github.io/tech-test-frontend/search.json')
      .then((response) => response.json())
      .then((data) => {
        setCards(data.Products)
      }).catch((error) => {
        console.log(error)
        setIsError(true)
      });
  }, []);

  const dataToDisplay = cards.slice(0, pageInfo.entriesPerPage)
  if (error) return (<div className='error-display'>
    <BiMessageError color='#ffa2c1' size='10em' />
    <div>
      Sorry, we are currently encountering issues, we&lsquo;ll be back soon!
    </div>
  </div>)
  return (
    <>
      <div data-testid='cards-list' className='cards'>
        {dataToDisplay.map((product: Product) => (
          <div data-testid='card-info' className='card' key={product.ProductId}>
            <div>
              <img className='card-image' alt={product.Title} src={product.ProductImage.Link.Href} />
            </div>
          </div>
        ))}
      </div>
      {isFetching && <div className="lds-ellipsis">{Array.from(Array(4).keys()).map((num) => <div key={`loading-${num}`} />)}</div>}
    </>
  );
}

export default ListCards;
