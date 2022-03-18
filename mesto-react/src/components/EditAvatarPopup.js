import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup(props) {

    const ref = useRef();

    useEffect(() => {
        ref.current.value = "";
    }, [props.isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({ avatar: ref.current.value });
    }

    return (
        <PopupWithForm
            name={"avatar"}
            title={"Обновить аватар"}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            children={(
                <>
                    <input className="form__input"
                           name="avatar"
                           type="url"
                           placeholder="url для аватара"
                           minLength="2"
                           id="avatar-input"
                           required
                           ref={ref}
                    />
                    <span className="form__input-error title-input-error"> </span>
                </>
            )}
        />
    )
}

export default EditAvatarPopup;
