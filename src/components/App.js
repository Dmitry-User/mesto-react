import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";


function App() {
  //return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  //);
  return (
  <>
    <div className="wrapper">
      <Header/>
      <Main/>
      <Footer/>
    </div>

    <PopupWithForm />

    {/* <div className="popup popup_type_edit-profile popup_background_light">
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" className="popup__close element-hover"></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form noValidate name="edit-profile" className="form popup__form">
          <label className="popup__label">
            <input
              required
              type="text"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              className="popup__input popup__input_type_name"
            />
            <span className="popup__error name-error"></span>
          </label>
          <label className="popup__label">
            <input
              required
              type="text"
              name="about"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              className="popup__input popup__input_type_about"
            />
            <span className="popup__error about-error"></span>
          </label>
          <button type="submit" aria-label="Сохранить" value="" className="popup__submit">Сохранить</button>
        </form>
      </div>
    </div> */}

    {/* <div className="popup popup_type_add-card popup_background_light">
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" className="popup__close element-hover"></button>
        <h2 className="popup__title">Новое место</h2>
        <form noValidate name="add-card" className="form popup__form">
          <label className="popup__label">
            <input
              required
              type="text"
              name="name"
              minLength="2"
              maxLength="30"
              placeholder="Название"
              className="popup__input popup__input_type_name"
            />
            <span className="popup__error name-error"></span>
          </label>
          <label className="popup__label">
            <input
              required
              type="url"
              name="link"
              placeholder="Ссылка на фото"
              className="popup__input popup__input_type_link"
              />
            <span className="popup__error link-error"></span>
          </label>
          <button type="submit" aria-label="Сохранить" value="" className="popup__submit">Создать</button>
        </form>
      </div>
    </div> */}

    {/* <div className="popup popup_type_edit-avatar popup_background_light">
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" className="popup__close element-hover"></button>
        <h2 className="popup__title">Обновить аватар</h2>
        <form noValidate name="edit-avatar" className="form popup__form">
          <label className="popup__label">
            <input
              required
              type="url"
              name="avatar"
              placeholder="Ссылка на фото"
              className="popup__input popup__input_type_avatar"
            />
            <span className="popup__error avatar-error"></span>
          </label>
          <button type="submit" aria-label="Сохранить" value="" className="popup__submit">Сохранить</button>
        </form>
      </div>
    </div> */}

    {/* <div className="popup popup_type_delete-card popup_background_light">
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" className="popup__close element-hover"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <form noValidate name="сonfirmation" className="form popup__form">
          <button type="submit" aria-label="Подтвердить" value="" className="popup__submit">Да</button>
        </form>
      </div>
    </div> */}

    <ImagePopup />

    <template className="card-template">
      <article className="card">
        <button type="button" aria-label="Удалить карточку" className="card__delete"></button>
        <img src="#" alt="" className="card__image" />
        <div className="card__description">
          <h2 className="card__title"> </h2>
          <div className="card__like-conteiner">
            <button type="button" aria-label="Поставить лайк" className="card__like"></button>
            <span className="card__like-count"></span>
          </div>
        </div>
      </article>
    </template>
  </>

  );
}

export default App;
