import Popup from "./Popup";

function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  onSubmit,
  children,
  buttonText,
}) {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      children={children}
      background="light"
    >
      <div className="popup__container">
        <button
          className="popup__close element-hover"
          onClick={onClose}
          type="button"
          aria-label="Закрыть"
        />
        <h2 className="popup__title">{title}</h2>
        <form
          className="form popup__form"
          name={name}
          onSubmit={onSubmit}
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
    </Popup>
  );
}

export default PopupWithForm;
