import { useEffect, useState } from 'react';

const usePagination = (fetchCardsCallback: () => void) : [isFetching: boolean, setIsFetching: (isFetching: boolean) => void] => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
    fetchCardsCallback();
  }

  return [isFetching, setIsFetching];
};

export default usePagination