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
import './App.css';

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

  const createFlashCard = (flashcard) => {
    fetch("http://localhost:3000/flash_cards", {
      body: JSON.stringify(flashcard),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readFlashCards())
      .catch((errors) => console.log("Flash Card create errors:", errors));
  };

  const updateFlashCard = (flashcard, id) => {
    fetch(`http://localhost:3000/flash_cards/${id}`, {
      body: JSON.stringify(flashcard),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => readFlashCards())
      .catch((errors) => console.log("Flash cards update errors:", errors));
  };

  const deleteFlashCard = (id) => {
    fetch(`http://localhost:3000/flash_cards/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => readFlashCards())
      .catch((errors) => console.log("Delete errors:", errors));
  };

  return (
    <div id="root">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/flashcardindex" element={<FlashCardIndex flashcards={flashcards} />} />
          <Route path="/flashcardshow/:id" element={<FlashCardShow flashcards={flashcards} deleteFlashCard={deleteFlashCard} />} />
          <Route path="/flashcardnew" element={<FlashCardNew createFlashCard={createFlashCard} />} />
          <Route path="/flashcardedit/:id" element={<FlashCardEdit flashcards={flashcards} updateFlashCard={updateFlashCard} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
