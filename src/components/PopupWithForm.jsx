function PopupWithForm({ name, title, isOpen, onClose, children, buttonText }) {

  return (
    <div className={
      `
        popup popup_type_${name}
        popup_background_light
        ${isOpen ? 'popup_is-open' : ''}
      `
    }>
      <div className="popup__container">
        <button
          className="popup__close element-hover"
          onClick={onClose}
          type="button"
          aria-label="Закрыть"
        />
        <h2 className="popup__title">
          {title}
        </h2>
        <form
          className="form popup__form"
          name={name}
          noValidate
        >
          {children}
          <button
            className="popup__submit"
            type="submit"
            value=""
            aria-label={buttonText}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;