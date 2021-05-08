import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (

    <div className="container">

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      ></Main>
      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <div className="popup__area">
          <input className="popup__input popup__input_type_name" type="text" name="name"
            placeholder="Имя" minLength="2" maxLength="40" id="popup-name" required />
          <span className="popup__input-error" id="popup-name-error"></span>
        </div>
        <div className="popup__area">
          <input className="popup__input popup__input_type_job" type="text" name="about"
            placeholder="О себе" minLength="2" maxLength="200" id="popup-job" required />
          <span className="popup__input-error" id="popup-job-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="card"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <div className="popup__area">
          <input className="popup__input popup__input_type_place" type="text" name="popupPlace"
            placeholder="Название" minLength="2" maxLength="30" id="popup-place" required />
          <span className="popup__input-error" id="popup-place-error"></span>
        </div>
        <div className="popup__area">
          <input className="popup__input popup__input_type_link" type="url" name="popupLink"
            placeholder="Ссылка на картинку" id="popup-link" required />
          <span className="popup__input-error" id="popup-link-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        containerName="popup-upd__container"
        titleName="popup-upd__title"
        btnName="popup-upd__btn"
        title="Обновить аватар"
        name="update"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <div className="popup__area">
          <input className="popup-upd__input popup__input" type="url" name="popupAvatar" id="popup-upd"
            placeholder="Ссылка на аватар" required />
          <span className="popup__input-error popup-upd__input-error" id="popup-upd-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        containerName="popup-sure__container"
        titleName="popup-sure__title"
        btnName="popup__btn_yes"
        title="Вы уверены?"
        name="delete"
        buttonText="Да" />

      <ImagePopup 
        card={selectedCard} 
        onClose={closeAllPopups} />

    </div>

  );
}

export default App;