import React, { useEffect, useState } from 'react';
import usePagination from '../../hooks/usePagination';
import { Product } from '../../types/Card';
import { BiMessageError } from 'react-icons/bi';
import Loading from '../../components/Loading';
import { useNavigate, useSearchParams } from 'react-router-dom';

type PageInfo = {
  currentPage: number
  entriesPerPage: number
}

const removeSpaceSpecialCharactersAndLowerCaseString = (val: string) => val.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

const filterData = (cards: Product[], searchParam: string): Product[] => {
  if (!searchParam) return cards
  const filteredCards = cards.filter((card) => {
    const title = removeSpaceSpecialCharactersAndLowerCaseString(card.Title)
    const searchKey: string = removeSpaceSpecialCharactersAndLowerCaseString(searchParam)
    return title.includes(searchKey)
  })
  return filteredCards
}

function ListCards() {
  const [cards, setCards] = useState<Product[]>([]);
  const [error, setIsError] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchKey = searchParams.get('searchKey') || ''
  const filteredData = filterData(cards, searchKey)

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
  
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    currentPage: 1,
    entriesPerPage: 20
  });

  const fetchMoreCards = () => {
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

  const [isFetching, setIsFetching] = usePagination(fetchMoreCards);

  const goToImageView = (productId: string) => {
    navigate(`/card/${productId}`)
  }
 
  const dataToDisplay = filteredData.slice(0, pageInfo.entriesPerPage)

  if (error) return (<div data-testid='error-msg' className='error-display'>
    <BiMessageError color='#ffa2c1' size='10em' />
    <div>
      Sorry, we are currently encountering issues, we&lsquo;ll be back soon!
    </div>
  </div>)

  return (
    <>
      {searchKey ? (<div className='results-info' data-testid='results-info'>
        Found <span>{filteredData.length}</span> results related to <span>{searchParams.get('searchKey')}</span>
      </div>) : null}
      {cards.length ? <div data-testid='cards-list' className='cards'>
        {dataToDisplay.map((product: Product) => (
          <div onClick={() => goToImageView(product.MoonpigProductNo)} data-testid='card-info' className='card' key={product.ProductId}>
            <img className='card-image' alt={product.Title} src={product.ProductImage.Link.Href} />
          </div>
        ))}
      </div> : null}
      {dataToDisplay.length < filteredData.length ? <Loading showLoading={isFetching}/> : null}
    </>
  );
}

export default ListCards;
