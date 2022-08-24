import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose}) {

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
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
        <span className="popup__error name-error" />
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_link"
          type="url"
          name="link"
          placeholder="Ссылка на фото"
          required
          />
        <span className="popup__error link-error" />
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;