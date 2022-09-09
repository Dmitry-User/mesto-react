import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading, buttonText }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNewCardName(e) {
    setName(e.target.value);
  }

  function handleNewCardLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
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
          onChange={handleNewCardName}
          name="name"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          required
          className="popup__input popup__input_type_name"
        />
        <span className="popup__error name-error" />
      </label>
      <label className="popup__label">
        <input
          type="url"
          value={link}
          onChange={handleNewCardLink}
          name="link"
          placeholder="Ссылка на фото"
          required
          className="popup__input popup__input_type_link"
        />
        <span className="popup__error link-error" />
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
