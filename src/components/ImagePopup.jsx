function ImagePopup({ card, onClose }) {

  return (
    <div className={
      `
        popup
        popup_type_full-image
        popup_background_dark
        ${card.link ? 'popup_is-open' : ''}
      `
    }>
      <figure className="popup__figure">
        <img
          className="popup__image"
          src={card.link}
          alt={`Фото ${card.name}.`}
        />
        <figcaption className="popup__image-caption">
          {card.name}
        </figcaption>
        <button
          className="popup__close element-hover"
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
        />
      </figure>
    </div>
  );
}

export default ImagePopup;