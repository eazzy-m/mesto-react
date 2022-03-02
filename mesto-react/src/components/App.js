import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {

    const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
    const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
    const [isAddPlaceOpen, setAddPlaceIsOpen] = React.useState(false);

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
