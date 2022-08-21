function Main(props) {


  // const handleEditAvatarClick = () => {
  //   document.querySelector('.popup_type_edit-avatar').classList.add('popup_is-open');
  // }

  // const handleEditProfileClick = () => {
  //   document.querySelector('.popup_type_edit-profile').classList.add('popup_is-open');
  // }

  // const handleAddPlaceClick = () => {
  //   document.querySelector('.popup_type_add-card').classList.add('popup_is-open');
  // }

  return(
    <main className="content">
      <section
        className="profile"
        aria-label="Секция профиль"
      >
        <div className="profile__avatar">
          <img
            className="profile__avatar-image"
            src="./images/avatar.jpg"
            alt="Аватар"
          />
          <button
            className="profile__avatar-button"
            type="button"
            onClick={props.onEditAvatar}
            aria-label="Изменить аватар"
          ></button>
        </div>
        <div className="profile__description">
          <div className="profile__top">
            <h1 className="profile__name">Жак Ив Кусто</h1>
            <button
              className="profile__edit element-hover"
              type="button"
              onClick={props.onEditProfile}
              aria-label="Редактировать"
            ></button>
          </div>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button
          className="profile__add-card element-hover"
          type="button"
          onClick={props.onAddPlace}
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