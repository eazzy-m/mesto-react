import React from "react";
import editButton from "../images/edit-vector.svg";
import addButton from "../images/add-button.svg";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function Main(props) {

    console.log(props.userName, props.userAvatar, props.userDescription)

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

            <PopupWithForm name={'profile'}
                           title={'Редактировать профиль'}
                           isOpen={props.isEditAvatarOpen}
                           close={props.onClose}
            />

            <PopupWithForm name={'avatar'}
                           title={'Обновить аватар'}
                           isOpen={props.isEditProfileOpen}
                           close={props.onClose}
            />

            <PopupWithForm name={'elements'}
                           title={'Новое место'}
                           isOpen={props.isAddPlaceOpen}
                           close={props.onClose}
            />

            {/*<PopupWithForm name={'confirm'}*/}
            {/*               title={'Вы уверены?'}*/}
            {/*               isOpen={props.isOpen}*/}
            {/*/>*/}

            {/*<ImagePopup card={''}*/}
            {/*            isOpen={''}*/}
            {/*            onClose={''}/>*/}

            {/*<section className="popup popup_elements">*/}
            {/*    <div className="popup__container">*/}
            {/*        <button className="exit-button exit-button_popup_elements opacity" type="reset" aria-label="выйти"*/}
            {/*                value="выйти" name="выйти">*/}
            {/*        </button>*/}
            {/*        <form className="form add-card-form"*/}
            {/*              name="profile_info"*/}
            {/*              method="POST"*/}
            {/*              noValidate>*/}
            {/*            <div className="form__container">*/}
            {/*                <h3 className="form__title">Новое место</h3>*/}
            {/*                <input className="form__input"*/}
            {/*                       name="name"*/}
            {/*                       type="text"*/}
            {/*                       placeholder="Название"*/}
            {/*                       value=""*/}
            {/*                       minLength="2"*/}
            {/*                       maxLength="30"*/}
            {/*                       id="place-input"*/}
            {/*                       required/>*/}
            {/*                <span className="form__input-error place-input-error"> </span>*/}
            {/*                <input className="form__input"*/}
            {/*                       name="link"*/}
            {/*                       type="url"*/}
            {/*                       placeholder="Ссылка на картинку"*/}
            {/*                       value=""*/}
            {/*                       id="url-input"*/}
            {/*                       required/>*/}
            {/*                <span className="form__input-error url-input-error"> </span>*/}
            {/*                <button className="opacity form__submit" aria-label="Создать" type="submit" disabled>Создать*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</section>*/}


            {/*<section className="popup popup_confirm">*/}
            {/*    <div className="popup__container">*/}
            {/*        <button className="exit-button exit-button_popup-confirm opacity" type="reset" aria-label="выйти"*/}
            {/*                value="выйти" name="выйти">*/}
            {/*        </button>*/}
            {/*        <form className="form" name="delete-card" noValidate>*/}
            {/*            <div className="form__container">*/}
            {/*                <h3 className="form__title form__title_confirm">Вы уверены?</h3>*/}
            {/*                <button className="form__submit form__submit_confirm opacity" type="submit" aria-label="Да" value="Да"*/}
            {/*                        name="Да">Да*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*<section className="popup popup_avatar">*/}
            {/*    <div className="popup__container">*/}
            {/*        <button className="exit-button exit-button_popup-confirm opacity" type="reset" aria-label="выйти"*/}
            {/*                value="выйти" name="выйти">*/}
            {/*        </button>*/}
            {/*        <form className="form edit-avatar-form" name="change-avatar" noValidate>*/}
            {/*            <div className="form__container">*/}
            {/*                <h3 className="form__title">Обновить аватар</h3>*/}
            {/*                <input className="form__input"*/}
            {/*                       name="avatar"*/}
            {/*                       type="url"*/}
            {/*                       placeholder="url для аватара"*/}
            {/*                       value=""*/}
            {/*                       id="avatar-input"*/}
            {/*                       required/>*/}
            {/*                <span className="form__input-error avatar-input-error"> </span>*/}
            {/*                <button className="form__submit opacity" type="submit" aria-label="Да" value="Да" name="Да"*/}
            {/*                        disabled>Сохранить*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section className="elements">

            </section>
        </main>
    );
}

export default Main;
