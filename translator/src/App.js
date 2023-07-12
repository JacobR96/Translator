import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Pages/Main";
import FlashCardEdit from "./Pages/FlashCardEdit";
import FlashCardIndex from "./Pages/FlashCardIndex";
import FlashCardNew from "./Pages/FlashCardNew";
import FlashCardShow from "./Pages/FlashCardShow";
import NotFound from "./Pages/NotFound";

function App() {
  const [flashcards, setFlashCards] = useState([]);

  useEffect(() => {
    readFlashCards();
  }, []);

  const readFlashCards = () => {
    fetch("http://localhost:3000/flash_cards")
      .then((response) => response.json())
      .then((payload) => {
        setFlashCards(payload);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/flashcardindex" element={<FlashCardIndex flashcards={flashcards} />} />
        <Route path="/flashcardshow/:id" element={<FlashCardShow flashcards={flashcards} />} />
        <Route path="/flashcardnew" element={<FlashCardNew />} />
        <Route path="/flashcardedit" element={<FlashCardEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
