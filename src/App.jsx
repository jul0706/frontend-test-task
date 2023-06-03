import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import AddPointPopup from "./components/AddPointPopup";
import EditPointPopup from "./components/EditPointPopup";
import PopupWithConfirmation from "./components/PopupWithConfirmation";
import Login from "./components/Login";
import React, { useState, useEffect } from 'react';
import initialModel from "./utils/model";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRouteElement from "../src/components/ProtectedRoute";


function App() {

  /*стейты для попапов*/
  const [isEditPointPopupOpen, setIsEditPointPopupOpen] = useState(false);
  const [isAddPointPopupOpen, setIsAddPointPopupOpen] = useState(false);
  const [isPopupWithConfirmationOpen, setisPopupWithConfirmationOpen] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);

  const [points, setPoints] = useState(initialModel);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [formValue, setFormValue] = useState({ //стэйт формы авторизации и регистрации
    email: '',
    password: ''
  })

  function handleCloseAllPopups() {
    setIsEditPointPopupOpen(false);
    setIsAddPointPopupOpen(false);
    setisPopupWithConfirmationOpen(false);
    setSelectedPoint(null);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleLogin(isLogin) { //вход/выход на сайт
    setIsLoggedIn(isLogin);
  }

  /*function handleAddPoint(data) {
    api.addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards])
      })
      .catch(err => displayError(err));
    handleCloseAllPopups();
  }*/

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={handleLogin}
      />
      <Routes>
        <Route
          path="/frontend-test-task"
          element={
            <ProtectedRouteElement
              element={Main}
              points={points}
            />}
        />
        <Route
          path="/sign-in"
          element={
            <Login
              onLogin={false}
              setisAuthComplete={setIsLoggedIn}
              onChange={handleChange}
              formValue={formValue}
              setFormValue={setFormValue}
            />}
        />
      </Routes>
      <Footer />
      <AddPointPopup
        isOpen={isAddPointPopupOpen}
        onClose={handleCloseAllPopups}
        onSubmit={handleAddPoint}
      />
      <EditPointPopup
        point={selectedPoint}
        isOpen={isEditPointPopupOpen}
        onClose={handleCloseAllPopups}
        onSubmit={submitFormMapPoint}
      />
      <PopupWithConfirmation
        point={selectedPoint}
        isOpen={isPopupWithConfirmationOpen}
        onClose={handleCloseAllPopups}
        onSubmit={submitFormMapPoint}
      />
    </>
  );
}

export default App;
