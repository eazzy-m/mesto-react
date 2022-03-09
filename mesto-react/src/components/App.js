import React, {useState} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import api from "../utils/Api";

function App() {

    const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [isAddPlaceOpen, setAddPlaceIsOpen] = useState(false);
    const [userData, setUserData] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([])


    React.useEffect(() => {
        api.getUserInfoFromServer()
            .then(user => setUserData(user))
            .catch(err => {alert(`При загрузке данных с сервера возникла ${err}`)})
        // Promise.all([api.getUserInfoFromServer(), api.getCardsFromServer()])
        //     .then(([user, cards]) => {
        //         setUserName(user);
        //         setCards(cards);
        //     }).catch(err => {
        //     alert(`При загрузке данных с сервера возникла ${err}`);
        // });
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

    function closeAllPopups() {
        setAddPlaceIsOpen(false);
        setIsEditProfileOpen(false);
        setIsEditAvatarOpen(false);
    }

  return (
    <div className="page">
      <Header/>

      <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onClose={closeAllPopups}
            isEditAvatarOpen={isEditAvatarOpen}
            isEditProfileOpen={isEditProfileOpen}
            isAddPlaceOpen={isAddPlaceOpen}
            userAvatar={userData.avatar}
            cards={cards}
            userName={userData.name}
            userDescription={userData.about}
      />

      <Footer/>

      <template id="element-template">
        <div className="element">
          <button className="delete-element-button opacity" type="button" aria-label="удалить"> </button>
          <img className="element__mask-group" src="#" alt=""/>
            <div className="element__description">
              <h2 className="element__text"> </h2>
              <div className="element__like-container">
                <button className="like-button opacity" type="button" aria-label="нравится"> </button>
                <span className='element__like-counter'>0</span>
              </div>
            </div>
        </div>
      </template>
    </div>
  );
}

export default App;
