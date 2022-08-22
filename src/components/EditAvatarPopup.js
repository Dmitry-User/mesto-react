import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_avatar"
          required
          type="url"
          name="avatar"
          placeholder="Ссылка на фото"
        />
        <span className="popup__error avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;