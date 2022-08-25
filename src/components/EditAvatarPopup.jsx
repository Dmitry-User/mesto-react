import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_avatar"
          required
          type="url"
          name="avatar"
          placeholder="Ссылка на фото"
        />
        <span className="popup__error avatar-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;