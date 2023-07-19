import React, { useState } from 'react';
import { Card, CardBody, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const FlashCardIndex = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePreviousCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <main className="flashcard-index-cards">
      <NavLink to="/flashcardnew" className="nav-link">
        <Button>Create Flash Card</Button>
      </NavLink>

      <div className="flashcard">
        {flashcards && flashcards.length > 0 ? (
          <Card className="card">
            <div className="card-image">
              <img
                alt={flashcards[currentIndex].english}
                src={flashcards[currentIndex].image}
                className="card-image"
              />
            </div>
            <CardBody>
              <CardText>
                <p>{flashcards[currentIndex].english}</p>
              </CardText>
              <NavLink to={`/flashcardshow/${flashcards[currentIndex].id}`} className="nav-link">
                See More Details
              </NavLink>
            </CardBody>
          </Card>
        ) : (
          <p>No flashcards available.</p>
        )}
      </div>

      <div className="nav-container">
        <Button className="nav-button" onClick={handlePreviousCard}>Previous</Button>
        <Button className="nav-button" onClick={handleNextCard}>Next</Button>
      </div>
    </main>
  );
};

export default FlashCardIndex;