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
