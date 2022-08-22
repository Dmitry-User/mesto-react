function Card(props) {

  // function handleClick() {
  //   props.onCardClick(props.card);
  // }

  return(
    <article key={props.card._id} className="card">
      <button
        className="card__delete"
        type="button"
        aria-label="Удалить карточку"
      />
      <img
        className="card__image"
        src={props.card.link}
        alt={`Фото ${props.card.name}`}
        // onClick={handleClick}
      />
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-conteiner">
          <button
            className="card__like"
            type="button"
            aria-label="Поставить лайк"
          />
          <span className="card__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;