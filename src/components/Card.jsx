function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article
      key={card._id}
      className="card"
    >
      <button
        className="card__delete"
        type="button"
        aria-label="Удалить карточку"
      />
      <img
        className="card__image"
        src={card.link}
        alt={`Фото ${card.name}.`}
        onClick={handleClick}
      />
      <div className="card__description">
        <h2 className="card__title">
          {card.name}
        </h2>
        <div className="card__like-conteiner">
          <button
            className="card__like"
            type="button"
            aria-label="Поставить лайк"
          />
          <span className="card__like-count">
            {card.likes.length}
          </span>
        </div>
      </div>
    </article>
  );
}

export default Card;