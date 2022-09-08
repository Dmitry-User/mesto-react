import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">
        <input
          ref={inputRef}
          type="url"
          name="avatar"
          placeholder="Ссылка на фото"
          required
          className="popup__input popup__input_type_avatar"
        />
        <span className="popup__error avatar-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;