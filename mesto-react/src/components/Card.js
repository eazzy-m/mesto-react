import React, { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {

    const user = React.useContext(CurrentUserContext);
    const isOwner = props.card.owner._id === user._id;
    const [liked, setLiked] = useState(
        props.card.likes.some(i => i._id === user._id) // Does the card have a like set by the current user?
    );

    function handleClick() {
        props.onCardClick(props.card);
    }

    function likeClick() {
        setLiked(!liked);
        props.onCardLike(props.card);
    }

    return (
       <div className="element">
        <button className={`${isOwner ? "delete-element-button opacity" : "delete-element-button_hide"}`}
                type="button"
        />
        <img className="element__mask-group"
             onClick={handleClick}
             src={props.card.link}
             alt={props.card.name}
        />
        <div className="element__description">
            <h2 className="element__text">{props.card.name}</h2>
            <div className="element__like-container">
                <button className={`like-button opacity ${liked && 'like-button_active'}`}
                        onClick={likeClick}
                        type="button"> </button>
                <span className="element__like-counter">{props.card.likes.length}</span>
            </div>
        </div>
       </div>
    );
}

export default Card;
