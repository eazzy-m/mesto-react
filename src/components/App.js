import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import api from "../utils/Api";
import context from "../context/Context";

function App() {

    const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [isAddPlaceOpen, setAddPlaceIsOpen] = useState(false);
    const [isImageOpen, setIsImageOpen] = useState(false);

    const [userInfo, setUserInfo] = useState('');
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState({
        name: "",
        link: "",
    });

    useEffect(() => {
        Promise.all([api.getUserInfoFromServer(), api.getCardsFromServer()])
            .then(([userData, cards]) => {
                setUserInfo(userData);
                setCards(cards)})
            .catch(err => alert(`При загрузке данных с сервера возникла ${err}`));
    },[]);

    function handleEditAvatarClick() {
        setIsEditAvatarOpen(!isEditAvatarOpen);
    }

    function handleEditProfileClick() {
        setIsEditProfileOpen(!isEditProfileOpen);
    }

    function handleAddPlaceClick() {
        setAddPlaceIsOpen(!isAddPlaceOpen);
    }

    function handleImageClick(card) {
        setSelectedCard(card);
        setIsImageOpen(!isImageOpen);
    }

    function closeAllPopups() {
        setIsEditAvatarOpen(false);
        setIsEditProfileOpen(false);
        setAddPlaceIsOpen(false);
        setIsImageOpen(false);
    }

  return (
      <>
        <context.Provider value={userInfo}>
          <div className="page">
            <Header/>

            <Main onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick}
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
      </context.Provider>
    </>
  );
}

export default App;
