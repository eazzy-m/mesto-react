import React from "react";

function ImagePopup() {
    return (
        <section className="popup popup_zoom-image">
            <div className="popup__container-zoom">
                <button className="exit-button exit-button_zoom-image-popup opacity" type="reset" aria-label="выйти"
                        value="выйти" name="выйти">
                </button>
                <figure className="popup__figure">
                    <img src="#" alt="" className="popup__figure-img"/>
                    <figcaption className="popup__figcaption"> </figcaption>
                </figure>
            </div>
        </section>
    )
}

export default ImagePopup;
