
const formEditProfile = document.querySelector('.edit-profile-form');
const addCardForm = document.querySelector('.add-card-form');
const avatarForm = document.querySelector('.edit-avatar-form');
const name = document.querySelector('#title-input');
const job = document.querySelector('#subtitle-input');

const avatarButton = document.querySelector('.profile__avatar');
const editButton = document.querySelector('.edit-button');
const addButton = document.querySelector('.add-button');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        createdAt: "2022-02-04T09:26:27.195Z",
        owner:
            {
                about: "unknown",
                avatar: "unknown",
                cohort: "unknown",
                name: "unknown",
                _id: "0",
            },
        likes: [],
        id : 0
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        createdAt: "2022-02-04T09:26:27.195Z",
        owner:
            {
                about: "unknown",
                avatar: "unknown",
                cohort: "unknown",
                name: "unknown",
                _id: "0",
            },
    likes: [],
        id : 0
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        createdAt: "2022-02-04T09:26:27.195Z",
        owner:
            {
                about: "unknown",
                avatar: "unknown",
                cohort: "unknown",
                name: "unknown",
                _id: "0",
            },
        likes: [],
        id : 0
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        createdAt: "2022-02-04T09:26:27.195Z",
        owner:
            {
                about: "unknown",
                avatar: "unknown",
                cohort: "unknown",
                name: "unknown",
                _id: "0",
            },
        likes: [],
        id : 0
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        createdAt: "2022-02-04T09:26:27.195Z",
        owner:
            {
                about: "unknown",
                avatar: "unknown",
                cohort: "unknown",
                name: "unknown",
                _id: "0",
            },
        likes: [],
        id : 0
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        createdAt: "2022-02-04T09:26:27.195Z",
        owner:
            {
                about: "unknown",
                avatar: "unknown",
                cohort: "unknown",
                name: "unknown",
                _id: "0",
            },
        likes: [],
        id : 0
    }
];

export default {formEditProfile, initialCards, name, job, avatarForm, avatarButton, addButton, addCardForm, editButton};
