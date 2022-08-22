
import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {

  const [userName, setUserName] = React.useState("Имя");
  const [userDescription, setUserDescription] = React.useState("О себе");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([{ about, avatar, name }, cards]) => {
        setUserDescription(about);
        setUserAvatar(avatar);
        setUserName(name);
        setCards(cards);
      })
      .catch(err => console.log(err));
  }, []);

  return(
    <main className="content">
      <section className="profile" aria-label="Секция профиль">
        <div className="profile__avatar">
          <img
            className="profile__avatar-image"
            src={userAvatar}
            alt="Аватар"
          />
          <button
            className="profile__avatar-button"
            type="button"
            onClick={props.onEditAvatar}
            aria-label="Изменить аватар"
          />
        </div>
        <div className="profile__description">
          <div className="profile__top">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit element-hover"
              type="button"
              onClick={props.onEditProfile}
              aria-label="Редактировать"
            />
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button
          className="profile__add-card element-hover"
          type="button"
          onClick={props.onAddPlace}
          aria-label="Добавить"
        />
      </section>
      <section className="card-list" aria-label="Секция с карточками">
        {cards.map(card => (
          <Card
            card={card}
            key={card._id}
            // onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;