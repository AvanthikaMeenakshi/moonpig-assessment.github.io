import { Product } from './../types/Card';
import { useEffect, useState } from 'react';

const usePagination = (fetchCardsCallback: () => void, cards: Product[], entriesOnPage: number) : [isFetching: boolean, setIsFetching: (isFetching: boolean) => void] => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cards, entriesOnPage]);

  useEffect(() => {
    if (!isFetching) return;
    fetchCardsCallback();
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching || entriesOnPage >= cards.length) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default usePagination