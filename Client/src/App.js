import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx";
import Error from "./views/Error.jsx";
import Form from "./views/Form";
import Favorites from "./views/Favorites";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";

function App() {
  const location = useLocation();
  const [acceso, setAccess] = useState(false);
  const navigate = useNavigate();

  async function logIn(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";

    let response = await axios.get(
      URL + `?email=${email}&password=${password}`
    );

    try {
      let { data } = response;
      const { access } = data;
      setAccess(access);

      if (access === true) {
        navigate("/home");
      } else {
        throw new Error("Log In incorrecto");
      }
    } catch (error) {
      window.alert(error.message);
    }
  }

  function logOut() {
    setAccess(false);
  }

  useEffect(() => {
    !acceso && navigate("/");
  }, [acceso]);

  const [characters, setCharacters] = useState([]);

  async function onSearch(id) {
    let exist = characters.find((element) => element.id === id);

    if (exist === undefined) {
      let response = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      try {
        let { data } = response;
        setCharacters((oldChars) => [...oldChars, data]);
      } catch (error) {
        window.alert(error.message);
      }
    } else {
      window.alert("Este personaje ya existe!");
    }
  }

  const dispatch = useDispatch();

  function onClose(idd) {
    const filtro = characters.filter((element) => element.id !== idd);
    setCharacters(filtro);
    dispatch(removeFav(idd));
  }

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="/" element={<Form logIn={logIn} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
