
function ImagePopup(props) {

  return (
    <ImagePopup
      onClose={props.onClose}
    >
      <div className="popup popup_type_full-image popup_background_dark">
        <figure className="popup__figure">
          <img className="popup__image" src="" alt="" />
          <figcaption className="popup__image-caption"></figcaption>
          <button
            className="popup__close element-hover"
            type="button"
            aria-label="Закрыть"
          />
        </figure>
      </div>
    </ImagePopup>
  );
}

export default ImagePopup;