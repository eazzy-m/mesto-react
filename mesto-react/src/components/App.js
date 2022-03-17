import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {

    const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [isAddPlaceOpen, setAddPlaceIsOpen] = useState(false);
    const [isImageOpen, setIsImageOpen] = useState(false);

    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState({name: "", link: ""});

    useEffect(() => {
        Promise.all([api.getUserInfoFromServer(), api.getCardsFromServer()])
            .then(([user, cards]) => {
                setCurrentUser(user);
                setCards(cards)})
            .catch(err => alert(`При загрузке данных с сервера возникла ${err}`));
    }, []);

    function handleEditAvatarClick() {
        setIsEditAvatarOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfileOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlaceIsOpen(true);
    }

    function handleImageClick(card) {
        setSelectedCard(card);
        setIsImageOpen(true);
    }

    function handleCardLike(card) {
        // is there already a like on this card
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        // we send a request to the API and get updated card data
        api.changeLikeCard(card._id, isLiked)
            .then(newCard => setCards(state => state.map(c => c._id === card._id ? newCard : c)))
            .catch(err => alert(`При обновлении лайка карточки возникла ${err}`));
    }

    function handleDeleteCard(card) {
        api.deleteCardFromServer(card._id)
            .then(newCard => {
                const newCardsList = cards.filter(elem => elem._id === card._id ? null : newCard);
                setCards(newCardsList)})
            .catch(err => `При удалении карточки возникла ${err}`);
    }


    function closeAllPopups() {
        setAddPlaceIsOpen(false);
        setIsEditProfileOpen(false);
        setIsEditAvatarOpen(false);
        setIsImageOpen(false);
        setSelectedCard({ name: "", link: "" });
    }

  return (
      <>
          <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
              <Header/>

              <Main onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleImageClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleDeleteCard}
                    onClose={closeAllPopups}

                    isEditAvatarOpen={isEditAvatarOpen}
                    isEditProfileOpen={isEditProfileOpen}
                    isAddPlaceOpen={isAddPlaceOpen}
                    isImageOpen={isImageOpen}

                    cards={cards}
                    selectedCard={selectedCard}
              />

              <Footer/>

            </div>
          </CurrentUserContext.Provider>
      </>
  );
}

export default App;
