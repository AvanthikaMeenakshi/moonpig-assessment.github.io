import React, { useEffect, useState } from 'react';
import { CardInfo } from '../../types/Card';
import Loading from '../../components/Loading';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../../components/ImageCarousel';

type QueryParams = {
  id: string
}

function ViewCard() {
  const [cardInfo, setCardInfo] = useState<CardInfo>();
  const [loading, setIsLoading] = useState<boolean>(true);
  const {id} = useParams<QueryParams>()

  useEffect(() => {
    fetch(`https://moonpig.github.io/tech-test-frontend/product/${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false)
        setCardInfo(data)
      }).catch((error) => {
        console.log(error)
      });
  }, []);

  if (loading && !cardInfo) return <Loading showLoading={loading}/>
  return (
    <div data-testid='card-view-container' className='card-view-container'>
      <div className='image-section'>
        <ImageCarousel images={cardInfo?.ImageUrls || []} />
      </div>
      <div className='content-section'>
        <h3 data-testid='title' className='card-title'>{cardInfo?.Title}</h3>
        <button className='purchase-button'>Buy now</button>
      </div>
    </div>
  );
}

export default ViewCard;
