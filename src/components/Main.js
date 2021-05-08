import React from 'react';

import editImagePath from '../images/edit.png';
import plusImagePath from '../images/plus.png';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userInfo, setUserInfo] = React.useState({ userName: "", userDescription: "", userAvatar: "" });

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ]).then(([userData, cards]) => {
      setUserInfo({ userName: userData.name, userDescription: userData.about, userAvatar: userData.avatar });
      setCards(cards);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__block">
          <button className="profile__button profile__button_avatar" type="button" onClick={onEditAvatar}>
            <img src={userInfo.userAvatar} alt="Изображение пользователя"
              className="profile__avatar" />
          </button>
          <div className="profile__info">
            <div className="profile__author">
              <h1 className="profile__title">{userInfo.userName}</h1>
              <button className="profile__button profile__button_edit" type="button" onClick={onEditProfile}>
                <img src={editImagePath} alt="Изображение карандаш" className="profile__pencil" />
              </button>
            </div>
            <p className="profile__subtitle">{userInfo.userDescription}</p>
          </div>
        </div>
        <button className="profile__button profile__button_plus" type="button" onClick={onAddPlace}>
          <img src={plusImagePath} alt="Изображение плюс" className="profile__plus" />
        </button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={onCardClick} />
            )
          })}
        </ul>
      </section>

    </main>
  )
}

export default Main;