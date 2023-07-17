import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
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
              {/* <CardTitle tag="h5">{flashcards[currentIndex].english}</CardTitle> */}
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Spanish: {flashcards[currentIndex].spanish}
              </CardSubtitle> */}
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
        <Button onClick={handlePreviousCard}>Previous</Button>
        <Button onClick={handleNextCard}>Next</Button>
      </div>
    </main>
  );
};

export default FlashCardIndex;
