import React from 'react';

export default function Rating(props) {
  const star = <i className="fa fa-star"></i>;
  const stars = [];
  for (let i = 0; i< props.rating; i++) {
    stars.push(star);
  }
  return (
    <div className="text-warning">
    {stars}
    </div>
  )
}
