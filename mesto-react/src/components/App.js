import React, {useState, useEffect} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import api from "../utils/Api";

function App() {

    const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [isAddPlaceOpen, setAddPlaceIsOpen] = useState(false);
    const [isImageOpen, setIsImageOpen] = React.useState(false)
    const [userData, setUserData] = useState('');
    const [selectedCard, setSelectedCard] = React.useState({
        name: "",
        link: "",
    });
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getUserInfoFromServer(), api.getCardsFromServer()])
            .then(([user, cards]) => {
                setUserData(user);
                setCards(cards)})
            .catch(err => alert(`При загрузке данных с сервера возникла ${err}`));
    }, []);

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
            cards={cards}
            userName={userData.name}
            userDescription={userData.about}
            userId={userData._id}
            selectedCard={selectedCard}
      />

      <Footer/>

    </div>
  );
}

export default App;
