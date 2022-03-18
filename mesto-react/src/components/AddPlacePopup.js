import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    
    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");
    
    function handleAddCardName(e) {
        setName(e.target.value);
    }

    function handleAddCardLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({ name, link });
    }

    useEffect(() => {
        setName('');
        setLink('');
    }, [props.isOpen]);
    
    return (
        <PopupWithForm
            name={"elements"}
            title={"Новое место"}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            children={(
                <>
                    <input className="form__input"
                           name="name"
                           type="text"
                           placeholder="Название"
                           minLength="2"
                           maxLength="30"
                           id="place-input"
                           required
                           onChange={handleAddCardName}
                           value={name || ""}
                    />
                    <span className="form__input-error title-input-error"> </span>
                    <input className="form__input"
                           name="link"
                           type="url"
                           placeholder="Ссылка на картинку"
                           id="url-input"
                           required
                           onChange={handleAddCardLink}
                           value={link || ""}
                    />
                    <span className="form__input-error subtitle-input-error"> </span>
                </>

            )}
        />
    )
}

export default AddPlacePopup;
