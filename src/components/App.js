import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  // const profileEdit = document.querySelector('.profile__button_edit');

  // const handleEditProfileClick = () => {
  //   document.querySelector('.popup_profile').classList.add('popup_opened');
  // }

  return (

        <div className="container">

          <Header />

          <Main>
            {/* {profileEdit.addEventListener('click', handleEditProfileClick)} */}
          </Main>

          <Footer />

          <div className="popup popup_profile">
            <div className="popup__container">
              <button className="popup__close popup__close_type_edit-profile" type="button">&times;</button>
              <h2 className="popup__title">Редактировать профиль</h2>
              <form className="popup__form popup__form_profile" name="popup-form" noValidate readOnly>
                <div className="popup__area">
                  <input className="popup__input popup__input_type_name" type="text" value="Жак-Ив Кусто" name="name"
                    placeholder="Имя" minLength="2" maxLength="40" id="popup-name" required readOnly />
                  <span className="popup__input-error" id="popup-name-error"></span>
                </div>
                <div className="popup__area">
                  <input className="popup__input popup__input_type_job" type="text" value="Исследователь океана" name="about"
                    placeholder="О себе" minLength="2" maxLength="200" id="popup-job" required readOnly />
                  <span className="popup__input-error" id="popup-job-error"></span>
                </div>
                <button className="popup__btn" type="submit" value="Сохранить">Сохранить</button>
              </form>
            </div>
          </div>

          <div className="popup popup_places">
            <div className="popup__container">
              <button className="popup__close popup__close_type_new-place" type="button">&times;</button>
              <h2 className="popup__title">Новое место</h2>
              <form className="popup__form popup__form_places" name="popup-form" noValidate readOnly>
                <div className="popup__area">
                  <input className="popup__input popup__input_type_place" type="text" value="" name="popupPlace"
                    placeholder="Название" minLength="2" maxLength="30" id="popup-place" required readOnly />
                  <span className="popup__input-error" id="popup-place-error"></span>
                </div>
                <div className="popup__area">
                  <input className="popup__input popup__input_type_link" type="url" value="" name="popupLink"
                    placeholder="Ссылка на картинку" id="popup-link" required readOnly />
                  <span className="popup__input-error" id="popup-link-error"></span>
                </div>
                <button className="popup__btn popup__btn_create" type="submit" value="Создать">Создать</button>
              </form>
            </div>
          </div>

          <template className="template">
            <div className="element">
              <img src="#" alt="#" className="element__image" />
              <button className="element__delete element__delete_inactive" type="button"></button>
              <div className="element__block">
                <h2 className="element__title"></h2>
                <div className="element__box">
                  <button className="element__link" type="button">
                    <img src="<%=require('./images/like.svg')%>" alt="Изображение сердца" className="element__icon" />
                  </button>
                  <div className="element__count">0</div>
                </div>
              </div>
            </div>
          </template>

          <div className="popup-image popup">
            <div className="popup-image__block">
              <button className="popup__close popup__close_type_zoom-image" type="button">&times;</button>
              <img src="#" alt="#" className="popup-image__photo" />
              <h2 className="popup-image__descr"></h2>
            </div>
          </div>

          <div className="popup-upd popup">
            <div className="popup__container popup-upd__container">
              <button className="popup__close popup__close_type_upd" type="button">&times;</button>
              <h2 className="popup__title popup-upd__title">Обновить аватар</h2>
              <form className="popup__form popup-upd__form" noValidate>
                <div className="popup__area">
                  <input className="popup-upd__input popup__input" type="url" name="popupAvatar" id="popup-upd"
                    placeholder="Ссылка на аватар" required noValidate />
                  <span className="popup__input-error popup-upd__input-error" id="popup-upd-error"></span>
                </div>
                <button className="popup__btn popup-upd__btn" type="submit" value="Сохранить">Сохранить</button>
              </form>
            </div>
          </div>

          <div className="popup-sure popup">
            <div className="popup__container popup-sure__container">
              <button className="popup__close popup__close_type_sure" type="button">&times;</button>
              <form className="popup__form popup-sure__form" noValidate>
                <h2 className="popup__title popup-sure__title">Вы уверены?</h2>
                <button className="popup__btn popup__btn_yes" type="submit" value="Да">Да</button>
              </form>
            </div>
          </div>

        </div>
    
  );
}

export default App;