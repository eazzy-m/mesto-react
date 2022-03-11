import React, { useState, useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import api from "../utils/api";

function App() {

    const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [isAddPlaceOpen, setAddPlaceIsOpen] = useState(false);
    const [isImageOpen, setIsImageOpen] = useState(false);

    const [cards, setCards] = useState([]);
    const [userData, setUserData] = useState({});
    const [selectedCard, setSelectedCard] = useState({
        name: "",
        link: "",
    });

    useEffect(() => {
        Promise.all([api.getUserInfoFromServer(), api.getCardsFromServer()])
            .then(([user, cards]) => {
                setUserData(user);
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

            userAvatar={userData.avatar}
            userName={userData.name}
            userDescription={userData.about}
            userId={userData.id}

            cards={cards}
            selectedCard={selectedCard}
      />

      <Footer/>

    </div>
  );
}

export default App;
