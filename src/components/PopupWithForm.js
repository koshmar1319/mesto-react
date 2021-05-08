import React from 'react';

function PopupWithForm({ title, name, isOpen, buttonText, onClose, children, containerName, titleName, btnName }) {
  return (
    <>
      <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
        <div className={`popup__container ${containerName ? containerName : ""}`}>
          <button className="popup__close" type="button" onClick={onClose}>&times;</button>
          <h2 className={`popup__title ${titleName ? titleName : ""}`}>{title}</h2>
          <form className="popup__form popup__form_profile" name={`popup-form-${name}`} noValidate>
            {children}
            <button className={`popup__btn ${btnName ? btnName : ""}`} type="submit">{buttonText}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PopupWithForm;