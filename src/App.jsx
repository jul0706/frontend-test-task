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

  function handleAddPoint(newPoint) {
    setPoints([...points, newPoint])
    handleCloseAllPopups();
  }

  function handleEditPoint(point, formValue) {
    point.name = formValue.name;
    point.amount = formValue.amount;
    point.x = +formValue.x;
    point.y = +formValue.y;
    console.log(point);
    setPoints((state) => state.map((s) => s.id === point.id ? point : s))
    handleCloseAllPopups();
  }

  function handleDeletePoint() {
    console.log('')
  }

  function checkLogin() {
    if (localStorage.getItem('login')) {
      handleLogin(true);
      navigate('/frontend-test-task', { replace: true });
    } else {
      navigate('/sign-in', { replace: true })
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])


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
              onAddPoint={handleAddPointClick}
              onEditPointClick={handleEditPointClick}
              onConfirm={openPopupWithConfirmation}
              loggedIn={isLoggedIn}
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
      </Routes>
      <Footer />
      <AddPointPopup
        isOpen={isAddPointPopupOpen}
        onClose={handleCloseAllPopups}
        onAddPoint={handleAddPoint}
      />
      <EditPointPopup
        point={selectedPoint}
        isOpen={isEditPointPopupOpen}
        onClose={handleCloseAllPopups}
        onSubmit={handleEditPoint}
      />
      <PopupWithConfirmation
        point={selectedPoint}
        isOpen={isPopupWithConfirmationOpen}
        onClose={handleCloseAllPopups}
        onSubmit={handleDeletePoint}
      />
    </>
  );
}

export default App;
