import PopupWithForm from "./PopupWithForm";

function EditProfileForm(props) {

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_name"
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error name-error"></span>
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_about"
          type="text"
          name="about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__error about-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfileForm;