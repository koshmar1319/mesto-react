const showErrorMessage = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

class Api {
  constructor(options) {
    this._token = options.token;
    this._groupID = options.groupID;
  }

  getUserInfo() {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._groupID}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._token
      }
    })
      .then(showErrorMessage)
  }

  setUserInfo(data) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._groupID}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(showErrorMessage)
  }

  getInitialCards() {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._groupID}/cards`, {
      method: "GET",
      headers: {
        authorization: this._token
      }
    })
      .then(showErrorMessage)
  }

  addCard(card) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._groupID}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
      .then(showErrorMessage)
  }

  deleteCard(card) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._groupID}/cards/${card._id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token
      }
    })
      .then(showErrorMessage)
  }

  setUserAvatar(avatar) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._groupID}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(showErrorMessage)
  }

  changeLikeCardStatus(card, likeCardStatus) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._groupID}/cards/likes/${card._id}`, {
      method: (likeCardStatus ? "PUT" : "DELETE"),
      headers: {
        authorization: this._token
      }
    })
      .then(showErrorMessage)
  }
}

const api = new Api({
  token: "23cb390e-6742-419b-8dec-601afe24420f",
  groupID: "cohort-22"
});

export default api;