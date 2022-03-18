import React, { useContext, useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const user = useContext(CurrentUserContext);
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");

    function handleUserName(e) {
        setName(e.target.value);
    }

    function handleUserAbout(e) {
        setAbout(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUserInfo({ name, about });
    }

    useEffect(() => {
        setName(user.name);
        setAbout(user.about);
    }, [props.isOpen, user]);

    return (
        <PopupWithForm
            name={"profile"}
            isOpen={props.isOpen}
            onClose={props.onClose}
            title={"Редактировать профиль"}
            onSubmit={handleSubmit}
            children={(
                <>
                    <input className="form__input"
                           name="name"
                           type="text"
                           placeholder="Имя"
                           minLength="2"
                           maxLength="40"
                           id="title-input"
                           required
                           value={name || ""}
                           onChange={handleUserName}
                    />
                    <span className="form__input-error title-input-error"> </span>
                    <input className="form__input"
                           name="about"
                           type="text"
                           placeholder="Профессиональная деятельность"
                           minLength="2"
                           maxLength="200"
                           id="subtitle-input"
                           required
                           value={about || ""}
                           onChange={handleUserAbout}
                    />
                    <span className="form__input-error subtitle-input-error"> </span>
                </>
            )}
        />
    )
}

export default EditProfilePopup;
