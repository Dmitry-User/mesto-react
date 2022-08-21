
function ImagePopup(props) {

  return (
    <div className="popup popup_type_full-image popup_background_dark">
      <figure className="popup__figure">
        <img className="popup__image" src={props.image} alt="" />
        <figcaption className="popup__image-caption"></figcaption>
        <button
          type="button"
          className="popup__close element-hover"
          aria-label="Закрыть"
        ></button>
      </figure>
    </div>
  );
}

export default ImagePopup;