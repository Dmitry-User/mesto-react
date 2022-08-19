function Main() {


  const handleEditAvatarClick = () => {
    document.querySelector('.popup_type_edit-avatar').classList.add('popup_is-open');
  }

  const handleEditProfileClick = () => {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_is-open');
  }

  const handleAddPlaceClick = () => {
    document.querySelector('.popup_type_add-card').classList.add('popup_is-open');
  }

  return(
    <main className="content">
      <section
        className="profile"
        aria-label="Секция профиль"
      >
        <div className="profile__avatar">
          <img
            src="./images/avatar.jpg"
            alt="Аватар"
            className="profile__avatar-image"
          />
          <button
            type="button"
            onClick={handleEditAvatarClick}
            className="profile__avatar-button"
            aria-label="Изменить аватар"
          ></button>
        </div>
        <div className="profile__description">
          <div className="profile__top">
            <h1 className="profile__name">Жак Ив Кусто</h1>
            <button
              type="button"
              onClick={handleEditProfileClick}
              className="profile__edit element-hover"
              aria-label="Редактировать"
            ></button>
          </div>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button
          type="button"
          onClick={handleAddPlaceClick}
          className="profile__add-card element-hover"
          aria-label="Добавить"
        ></button>
      </section>
      <section
        className="card-list"
        aria-label="Секция с карточками"
      ></section>
    </main>
  );
}

export default Main;