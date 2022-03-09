import React, { useContext } from "react";
import editButton from "../images/edit-vector.svg";
import addButton from "../images/add-button.svg";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import context from "../context/Context";

function Main(props) {

    const user = useContext(context);

    return (
        <main className="main">
            <section className="profile">

                <div className="profile__overlay">
                    <img className="profile__avatar"
                         alt="Это Вы"
                         src={user.avatar}
                         onClick={props.onEditAvatar}/>
                </div>

                <div className="profile__info">
                    <h1 className="profile__info-title">{user.name || "Жак - Ив Кусто"}</h1>
                    <button className="edit-button opacity button-open-form"
                            type="button"
                            aria-label="изменить"
                            onClick={props.onEditProfile}>
                        <img className="edit-button__vector" src={editButton} alt="Изменить"/>
                    </button>
                    <p className="profile__info-subtitle">{user.about || "Исследователь океана"}</p>
                </div>

                <button className="add-button opacity button-open-form"
                        type="button"
                        aria-label="добавить"
                        onClick={props.onAddPlace}>
                    <img className="add-button__vector" src={addButton} alt="Добавить"/>
                </button>
            </section>

            <PopupWithForm name={"profile"}
                           title={"Редактировать профиль"}
                           isOpen={props.isEditAvatarOpen}
                           close={props.onClose}
            />

            <PopupWithForm name={"avatar"}
                           title={"Обновить аватар"}
                           isOpen={props.isEditProfileOpen}
                           close={props.onClose}
            />

            <PopupWithForm name={"elements"}
                           title={"Новое место"}
                           isOpen={props.isAddPlaceOpen}
                           close={props.onClose}
            />

            <ImagePopup card={props.selectedCard}
                        isOpen={props.isImageOpen}
                        close={props.onClose}
            />

            <section className="elements">
                {props.cards.map(card => (
                    <Card key={card._id}
                          card={card}
                          onCardClick={props.onCardClick}
                          likeCounter={card.likes.length}
                    />
                ))}
            </section>

        </main>
    );
}

export default Main;
