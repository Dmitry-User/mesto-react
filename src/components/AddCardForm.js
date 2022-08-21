import PopupWithForm from "./PopupWithForm";

function AddCardForm(props) {

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_name"
          type="text"
          name="name"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          required
        />
      <span className="popup__error name-error"></span>
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_link"
          type="url"
          name="link"
          placeholder="Ссылка на фото"
          required
          />
        <span className="popup__error link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddCardForm;