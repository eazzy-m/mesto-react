import React from "react";

function ImagePopup(props) {
    return (
        <section className={`popup popup_zoom-image ${props.card.link && "popup_open"}`}>
            <div className="popup__container-zoom">
                <button className="exit-button exit-button_zoom-image-popup opacity"
                        onClick={props.onClose}
                        type="reset"
                        aria-label="выйти"
                        value="выйти"
                        name="выйти">
                </button>
                <figure className="popup__figure">
                    <img src={props.card.link}
                         alt={props.card.name}
                         className="popup__figure-img"/>
                    <figcaption className="popup__figcaption">{props.card.name}</figcaption>
                </figure>
            </div>
        </section>
    );
}

export default ImagePopup;
