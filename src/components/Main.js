import React from 'react';

import profileImagePath from '../images/profile-image.jpg';
import editImagePath from '../images/edit.png';
import plusImagePath from '../images/plus.png';

function Main() {
  function handleEditProfileClick(){
    document.querySelector('.popup_profile').classList.add('popup_opened');
  }

  function handleEditAvatarClick(){
    document.querySelector('.popup-upd').classList.add('popup_opened');
  }

  function handleAddPlaceClick(){
    document.querySelector('.popup_places').classList.add('popup_opened');
  }

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__block">
          <button className="profile__button profile__button_avatar" type="button" onClick={handleEditAvatarClick}>
            <img src={profileImagePath} alt="Изображение Жак-Ив Кусто"
              className="profile__avatar" />
          </button>
          <div className="profile__info">
            <div className="profile__author">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button className="profile__button profile__button_edit" type="button" onClick={handleEditProfileClick}>
                <img src={editImagePath} alt="Изображение карандаш" className="profile__pencil" />
              </button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__button profile__button_plus" type="button" onClick={handleAddPlaceClick}>
          <img src={plusImagePath} alt="Изображение плюс" className="profile__plus" />
        </button>
      </section>

      <section className="elements">
        <ul className="elements__list"></ul>
      </section>

    </main>
  )
}

export default Main;