import React from "react";
import context from "../context/Context";

function Card(props) {
    const user = React.useContext(context);
    const isOwner = props.card.owner._id === user._id;

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="element">
            <button className={`${isOwner ? "delete-element-button opacity" : "delete-element-button_hide"}`}
                    type="button"/>
            <img className="element__mask-group"
                 onClick={handleClick}
                 src={props.card.link}
                 alt={props.card.name}/>
            <div className="element__description">
                <h2 className="element__text">{props.card.name}</h2>
                <div className="element__like-container">
                    <button
                        className={"like-button opacity"}
                        type="button"> </button>
                    <span className="element__like-counter">{props.likeCounter}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
