import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import AddPlacePopup from "./AddPlacePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "", about: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleUpdateUser(user) {
    setIsLoading(true);
    api
      .setUserInfo(user)
      .then((newUser) => {
        setCurrentUser(newUser);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleUpdateAvatar(user) {
    setIsLoading(true);
    api
      .setAvatar(user)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAddPlaceSubmit(cardData) {
    setIsLoading(true);
    api
      .addCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)))
      })
      .catch((err) => console.log(err));
  }

  const [cardId, setCardId] = useState("");
  function handleCardDelete() {
    const currentCard = cardId;
    setIsLoading(true);
    api
      .deleteCard(currentCard)
      .then(() => {
        setCards((newCards) => newCards.filter((c) => (c._id !== currentCard)));
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] = useState(false);
  function handleDeleteCardClick(card) {
    setConfirmDeletePopupOpen(!isConfirmDeletePopupOpen);
    setCardId(card);
  }

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const [isPlacePopupOpen, setIsPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  function handleCardClick(card) {
    setSelectedCard(card);
    setIsPlacePopupOpen(!isPlacePopupOpen);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setConfirmDeletePopupOpen(false);
    setIsPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
    setCardId("");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="wrapper">
        <Header />
        <Main
          cards={cards}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteCardClick}
          onCardClick={handleCardClick}
          onAddCard={handleAddPlaceClick}
        />
        <Footer />
      </div>

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        isLoading={isLoading}
        buttonText={ isLoading ? "Сохранение..." : "Сохранить"}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        isLoading={isLoading}
        buttonText={ isLoading ? "Сохранение..." : "Сохранить"}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        isLoading={isLoading}
        buttonText={ isLoading ? "Создание..." : "Создать"}
      />
      <ConfirmDeletePopup
        isOpen={isConfirmDeletePopupOpen}
        onClose={closeAllPopups}
        onDeleteCard={handleCardDelete}
        isLoading={isLoading}
        buttonText={ isLoading ? "Удаление..." : "Удалить"}
      />
      <ImagePopup
        card={selectedCard}
        isOpen={isPlacePopupOpen}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
