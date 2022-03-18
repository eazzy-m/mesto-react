import React, { useContext } from "react";
import editButton from "../images/edit-vector.svg";
import addButton from "../images/add-button.svg";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {

    const user = useContext(CurrentUserContext);

    return (
        <main className="main">
            <section className="profile">

                <div className="profile__overlay">
                    <img className="profile__avatar"
                         alt="Это Вы"
                         src={user.avatar}
                         onClick={props.onEditAvatar}
                    />
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

            <section className="elements">
                {props.cards.map(card => (
                    <Card key={card._id}
                          card={card}
                          onCardClick={props.onCardClick}
                          onCardLike={props.onCardLike}
                          onCardDelete={props.onCardDelete}
                    />
                ))}
            </section>

        </main>
    );
}

export default Main;
