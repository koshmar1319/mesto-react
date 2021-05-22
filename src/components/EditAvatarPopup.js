import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [link, setLink] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: link });
  }

  function handleChange(e) {
    setLink(e.target.value);
  }

  React.useEffect(() => {
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      containerName="popup-upd__container"
      titleName="popup-upd__title"
      btnName="popup-upd__btn"
      title="Обновить аватар"
      name="update"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__area">
        <input
          className="popup-upd__input popup__input"
          type="url"
          name="link"
          value={link}
          placeholder="Ссылка на аватар"
          required
          onChange={handleChange}
        />
        <span
          className="popup__input-error popup-upd__input-error"
          id="popup-upd-error"
        ></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
