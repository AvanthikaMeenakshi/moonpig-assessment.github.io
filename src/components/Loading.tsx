import React from 'react';

const Loading = ({ showLoading } : { showLoading: boolean }) => {
  if (!showLoading) return null
  return (
    <div data-testid='loading' className="lds-ellipsis">
      {Array.from(Array(4).keys()).map((num) => <div key={`loading-${num}`} />)}
    </div>
  )
}

export default Loading