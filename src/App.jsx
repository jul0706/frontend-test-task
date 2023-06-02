import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import PopupWithForm from "./components/PopupWithForm";


function App() {
  function handleClosePopup() {
    console.log("Close")
  }
  function submitFormMapPoint(e) {
    e.preventDefault();
    console.log('submit!')
  }
  return (
    <>
      <Header isLoggedIn={true} />
      <Main />
      <Footer />
      <PopupWithForm
        name='map-point'
        isOpen={true}
        onClose={handleClosePopup}
        onSubmit={submitFormMapPoint}
      />
    </>
  );
}

export default App;
