import React from 'react';
import likePath from '../images/like.svg';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element">
      <img src={`${card.link}`} onClick={handleClick} alt="#" className="element__image" />
      <button className="element__delete element__delete_inactive" type="button"></button>
      <div className="element__block">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__box">
          <button className="element__link" type="button">
            <img src={likePath} alt="Изображение сердца" className="element__icon" />
          </button>
          <div className="element__count">{card.likes.length}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;