import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading, buttonText }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  } 

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      buttonText={buttonText}
    >
      <label className="popup__label">
        <input
          type="text"
          value={name}
          onChange={handleChangeName}
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          className="popup__input popup__input_type_name"
        />
        <span className="popup__error name-error" />
      </label>
      <label className="popup__label">
        <input
          type="text"
          value={description}
          onChange={handleChangeDescription}
          name="about"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
          className="popup__input popup__input_type_about"
        />
        <span className="popup__error about-error" />
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;