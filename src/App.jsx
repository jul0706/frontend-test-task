import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";


function App() {
  return (
    <>
      <Header isLoggedIn={false} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
