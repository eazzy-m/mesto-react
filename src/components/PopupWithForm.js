import React from "react";


function PopupWithForm(props) {

    return (
        <section className={`popup popup_${props.name} ${props.isOpen && "popup_open"}`}>

            <div className="popup__container">
                <button className="exit-button exit-button_popup_profile opacity"
                        type="reset"
                        aria-label="выйти"
                        value="выйти"
                        name="выйти"
                        onClick={props.close}
                >
                </button>
                <form className={`form edit-${props.name}-form`}
                      name="profile_info"
                      method="POST"
                      noValidate>
                    <div className="form__container">
                        <h3 className="form__title">{props.title}</h3>
                        <input className="form__input"
                               name="name"
                               type="text"
                               placeholder="Имя"
                               value=""
                               minLength="2"
                               maxLength="40"
                               id="title-input"
                               required
                               onChange={() => {}}
                        />
                        <span className="form__input-error title-input-error"> </span>
                        <input className="form__input"
                               name="about"
                               type="text"
                               placeholder="Профессиональная деятельность"
                               value=""
                               minLength="2"
                               maxLength="200"
                               id="subtitle-input"
                               required
                               onChange={() => {}}
                        />
                        <span className="form__input-error subtitle-input-error"> </span>
                        <button className="opacity form__submit" aria-label="Cохранить" type="submit">Cохранить</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm;
