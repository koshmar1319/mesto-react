import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  function handleChangeTitle(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="card"
      buttonText="Создать"
      onSubmit={handleAddPlaceSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="popup__area">
        <input
          className="popup__input popup__input_type_place"
          type="text"
          name="place"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          value={name}
          onChange={handleChangeTitle}
          onClose={onClose}
          required
        />
        <span className="popup__input-error" id="popup-place-error"></span>
      </div>
      <div className="popup__area">
        <input
          className="popup__input popup__input_type_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          value={link}
          onChange={handleChangeLink}
          onClose={onClose}
          required
        />
        <span className="popup__input-error" id="popup-link-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
