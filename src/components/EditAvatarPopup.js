import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: inputRef.current.value });
  }

  React.useEffect(() => {
    inputRef.current.value = "";
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
          placeholder="Ссылка на аватар"
          ref={inputRef}
          required
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
