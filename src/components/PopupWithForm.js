
function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name} popup_background_light`}>
      <div className="popup__container">
        <button type="button" aria-label="Закрыть" className="popup__close element-hover"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form noValidate name={props.name} className="form popup__form">
          {children}
          <button type="submit" aria-label="Сохранить" value="" className="popup__submit">Создать</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;