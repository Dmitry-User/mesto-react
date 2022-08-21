
function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name} popup_background_light ${props.isOpen ? 'popup_is-open' : ''}`}>
      <div className="popup__container">
        <button
          className="popup__close element-hover"
          onClick={props.onClose}
          type="button"
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__title">
          {props.title}
        </h2>
        <form
          className="form popup__form"
          name={props.name}
          noValidate
        >
          {props.children}
          <button
            className="popup__submit"
            type="submit"
            value=""
            aria-label="Сохранить"
          >
            Создать
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;