import React from "react";
import editButton from "../images/edit-vector.svg";
import addButton from "../images/add-button.svg";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";

function Main(props) {

    return (
        <main className="main">
            <section className="profile">

                <div className="profile__overlay">
                    <img className="profile__avatar"
                         alt="Это Вы"
                         src={props.userAvatar}
                         onClick={props.onEditAvatar}/>
                </div>

                <div className="profile__info">
                    <h1 className="profile__info-title">{props.userName ? props.userName : "Жак - Ив Кусто"}</h1>
                    <button className="edit-button opacity button-open-form"
                            type="button"
                            aria-label="изменить"
                            onClick={props.onEditProfile}>
                        <img className="edit-button__vector" src={editButton} alt="Изменить"/>
                    </button>
                    <p className="profile__info-subtitle">{props.userDescription ? props.userDescription :'Исследователь океана'}</p>
                </div>

                <button className="add-button opacity button-open-form"
                        type="button"
                        aria-label="добавить"
                        onClick={props.onAddPlace}>
                    <img className="add-button__vector" src={addButton} alt="Добавить"/>
                </button>
            </section>

            <PopupWithForm name={'avatar'}
                           title={'Обновить аватар'}
                           isOpen={props.isEditAvatarOpen}
                           close={props.onClose}
                           children={(
                               <>
                                   <input className="form__input"
                                          name="name"
                                          type="url"
                                          placeholder="url для аватара"
                                          defaultValue=""
                                          minLength="2"
                                          maxLength="40"
                                          id="title-input"
                                          required/>
                                   <span className="form__input-error title-input-error"> </span>
                               </>
                           )}
            />

            <PopupWithForm name={'profile'}
                           title={'Редактировать профиль'}
                           isOpen={props.isEditProfileOpen}
                           close={props.onClose}
                           children={(
                               <>
                                   <input className="form__input"
                                   name="name"
                                   type="text"
                                   placeholder="Имя"
                                   defaultValue=""
                                   minLength="2"
                                   maxLength="40"
                                   id="title-input"
                                   required/>
                                   <span className="form__input-error title-input-error"> </span>
                                   <input className="form__input"
                                   name="about"
                                   type="text"
                                   placeholder="Профессиональная деятельность"
                                   defaultValue=""
                                   minLength="2"
                                   maxLength="200"
                                   id="subtitle-input"
                                   required/>
                                   <span className="form__input-error subtitle-input-error"> </span>
                               </>
                           )}
            />

            <PopupWithForm name={'elements'}
                           title={'Новое место'}
                           isOpen={props.isAddPlaceOpen}
                           close={props.onClose}
                           children={(
                               <>
                                   <input className="form__input"
                                          name="name"
                                          type="text"
                                          placeholder="Название"
                                          defaultValue=""
                                          minLength="2"
                                          maxLength="40"
                                          id="title-input"
                                          required/>
                                   <span className="form__input-error title-input-error"> </span>
                                   <input className="form__input"
                                          name="about"
                                          type="url"
                                          placeholder="Ссылка на картинку"
                                          defaultValue=""
                                          minLength="2"
                                          maxLength="200"
                                          id="subtitle-input"
                                          required/>
                                   <span className="form__input-error subtitle-input-error"> </span>
                               </>

                           )}
            />

            <section className="elements">
                {props.cards.map((card, id) => (
                    <Card key={id}
                          user={props.userId}
                          card={card}
                          onCardClick={props.onCardClick}
                    />
                ))}
            </section>
            <ImagePopup card={props.selectedCard}
                        isOpen={props.isImageOpen}
                        onClose={props.onClose}
            />
        </main>
    );
}

export default Main;
