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
      // converts the object to a string that can be passed in the request
      body: JSON.stringify(flashcard),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readFlashCard())
      .catch((errors) => console.log("Flash Card create errors:", errors))
  }
  const updateFlashCard = (flashcard, id) => {
    fetch(`http://localhost:3000/flash_cards/${id}`, {
      // converting an object to a string
      body: JSON.stringify(flashcard),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => readFlashCard())
      .catch((errors) => console.log("Flash cards update errors:", errors))
  }
  

  deleteFlashCard = (id) => {
    fetch(`http://localhost:3000/flash_cards/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => readFlashCard())
      .catch((errors) => console.log("delete errors:", errors))
  }


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/flashcardindex" element={<FlashCardIndex flashcards={flashcards} />} />
        <Route path="/flashcardshow/:id" element={<FlashCardShow flashcards={flashcards} />} />
        <Route path="/flashcardnew" element={<FlashCardNew />} />
        <Route path="/flashcardedit" element={<FlashCardEdit />} />
        <Route path="/flashcardshow/:id" element={<FlashCardShow flashcards={flashcards} deleteFlashCard={deleteFlashCard} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
