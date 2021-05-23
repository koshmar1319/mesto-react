import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonText }) {
  const [name, setName] = React.useState("Name");
  const [description, setDescription] = React.useState("About");

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser.name && currentUser.about) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAbout(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__area">
        <input
          className="popup__input popup__input_type_name"
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleChangeName}
          required
        />
        <span className="popup__input-error" id="popup-name-error"></span>
      </div>
      <div className="popup__area">
        <input
          className="popup__input popup__input_type_job"
          type="text"
          name="about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          value={description}
          onChange={handleChangeAbout}
          required
        />
        <span className="popup__input-error" id="popup-job-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
