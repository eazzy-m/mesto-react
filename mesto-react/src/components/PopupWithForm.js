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
                />
                <form className={`form edit-${props.name}-form`}
                      onSubmit={props.onSubmit}
                      name="profile_info"
                      method="POST"
                      noValidate>
                      <div className="form__container">
                        <h3 className="form__title">{props.title}</h3>
                          {props.children}
                        <button className="opacity form__submit" aria-label="Cохранить" type="submit">Cохранить</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm;
