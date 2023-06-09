import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import AddPointPopup from "./AddPointPopup";
import EditPointPopup from "./EditPointPopup";
import PopupWithConfirmation from "./PopupWithConfirmation";
import Login from "./Login";
import React, { useState, useEffect } from 'react';
import initialModel from "../utils/model";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRouteElement from "./ProtectedRoute";
import UnknownState from "./UnknownState";

function App() {

  /*стейты для попапов*/
  const [isEditPointPopupOpen, setIsEditPointPopupOpen] = useState(false);
  const [isAddPointPopupOpen, setIsAddPointPopupOpen] = useState(false);
  const [isPopupWithConfirmationOpen, setisPopupWithConfirmationOpen] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);

  const [points, setPoints] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  //обработчики открытия попапов
  function handleLogin(isLogin) {
    setIsLoggedIn(isLogin);
  }

  function handleAddPointClick() {
    setIsAddPointPopupOpen(true);
  }

  function handleEditPointClick(point) {
    setSelectedPoint(point);
    setIsEditPointPopupOpen(true);
  }

  function openPopupWithConfirmation() {
    setisPopupWithConfirmationOpen(true)
  }

  function handleCloseAllPopups() {
    setIsEditPointPopupOpen(false);
    setIsAddPointPopupOpen(false);
    setisPopupWithConfirmationOpen(false);
    setSelectedPoint(null);
  }


  const [formValue, setFormValue] = useState({
    login: '',
    password: ''
  })

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleAddPointSubmit(newPoint) {
    const arrayForLocalStorage = [...points, newPoint];
    setPoints(arrayForLocalStorage);
    localStorage.setItem('points', JSON.stringify(arrayForLocalStorage));
    handleCloseAllPopups();
  }

  function handleEditPointSubmit(point, formValue) {
    point.name = formValue.name;
    point.amount = +formValue.amount;
    point.x = +formValue.x;
    point.y = +formValue.y;
    const arrayForLocalStorage = points.map((p) => p.id === point.id ? point : p)
    setPoints(arrayForLocalStorage);
    localStorage.setItem('points', JSON.stringify(arrayForLocalStorage))
    handleCloseAllPopups();
  }

  function handleDeletePoint(point) {
    let arrayForLocalStorage = points.filter((p) => p.id !== point.id);
    setPoints(arrayForLocalStorage);
    localStorage.setItem('points', JSON.stringify(arrayForLocalStorage));
    handleCloseAllPopups();
  }

  function checkLogin() {
    if (localStorage.getItem('login')) {
      handleLogin(true);
      navigate('/frontend-test-task', { replace: true });
    } else {
      navigate('/sign-in', { replace: true })
    }
  }

  function checkLocalStorage() {
    let initialPoints;
    if (localStorage.getItem('points')) {
      initialPoints = JSON.parse(localStorage.getItem('points'))
    } else {
      initialPoints = initialModel
    }
    setPoints(initialPoints);
    localStorage.setItem('points', JSON.stringify(initialPoints))
  }

  useEffect(() => {
    checkLocalStorage();
    checkLogin();
  }, [isLoggedIn])


  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={setIsLoggedIn}
      />
      <Routes>
        <Route
          path="/frontend-test-task"
          element={
            <ProtectedRouteElement
              element={Main}
              points={points}
              setPoints={setPoints}
              onAddPointClick={handleAddPointClick}
              onEditPointClick={handleEditPointClick}
              onConfirm={openPopupWithConfirmation}
              loggedIn={isLoggedIn}
              initialPoints={initialModel}
            />}
        />
        <Route
          path="/sign-in"
          element={
            <Login
              onLogin={setIsLoggedIn}
              onChange={handleChangeInput}
              formValue={formValue}
              setFormValue={setFormValue}
            />}
        />
        <Route
          path="*"
          element={
            <UnknownState
              isLoggedIn={isLoggedIn}
              points={points}
              setPoints={setPoints}
              onAddPointClick={handleAddPointClick}
              onEditPointClick={handleEditPointClick}
              initialPoints={initialModel}
              onLogin={setIsLoggedIn}
              onChange={handleChangeInput}
              formValue={formValue}
              setFormValue={setFormValue}
            />}
        />
      </Routes>
      <Footer />
      <AddPointPopup
        isOpen={isAddPointPopupOpen}
        onClose={handleCloseAllPopups}
        onAddPoint={handleAddPointSubmit}
        points={points}
      />
      <EditPointPopup
        point={selectedPoint}
        isOpen={isEditPointPopupOpen}
        onClose={handleCloseAllPopups}
        onSubmit={handleEditPointSubmit}
        onConfirmPopupOpen={setisPopupWithConfirmationOpen}
      />
      <PopupWithConfirmation
        point={selectedPoint}
        isOpen={isPopupWithConfirmationOpen}
        onClose={handleCloseAllPopups}
        onDelete={handleDeletePoint}
      />
    </>
  );
}

export default App;