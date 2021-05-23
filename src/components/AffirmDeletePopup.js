import React from "react";
import PopupWithForm from "./PopupWithForm";

function AffirmDeletePopup({isOpen, onClose, card, onSubmitDelete}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmitDelete(card);
  }

  return (
    <PopupWithForm
      containerName="popup-sure__container"
      titleName="popup-sure__title"
      btnName="popup__btn_yes"
      title="Вы уверены?"
      name="delete"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  )
}

export default AffirmDeletePopup;