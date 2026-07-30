// import React from 'react'
import { useState } from 'react';
import styles from './StarRating.module.css'
import { FaStar } from 'react-icons/fa'

const StarRating = ({ noOfStars = 5 }) => {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIdx) => {
    setRating(getCurrentIdx);
  }

  const handleMove = (getCurrentIdx) => {
    setHover(getCurrentIdx);
  }

  const handleLeave = () => {
    setHover(rating);
  }

  return (
    <div className={styles.starRating}>
      {[...Array(noOfStars)].map((_, idx) => {
        idx += 1;

        return (
          <FaStar 
            key={idx}
            className={idx <= (hover || rating) ? styles.active : styles.inactive}
            onClick={() => handleClick(idx)}
            onMouseMove={() => handleMove(idx)}
            onMouseLeave={() => handleLeave()}
            size={50}
          />
        );
      })}
    </div>
  );
}

export default StarRating