import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const FlashCardShow = ({ flashcards, deleteFlashCard }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteFlashCard(id);
    navigate('/flashcardindex');
  };

  const currentFlashCard = flashcards.find((flashcard) => flashcard.id === +id);

  if (!currentFlashCard) {
    return <div>Loading...</div>;
  }
  
  return (
    <main className="show-page">
      <div className="show-page-card">
        <Card className="show-page-card-body">
          <img
            alt={currentFlashCard.english}
            src={currentFlashCard.image}
            className="show-page-image"
          />
          <CardBody>
            <CardTitle tag="h5">{currentFlashCard.english}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Spanish: {currentFlashCard.spanish}
            </CardSubtitle>
            <CardText>
              <p>{currentFlashCard.description}</p>
            </CardText>
            <div className="show-page-links">
              <NavLink to="/flashcardindex" className="show-page-nav-link">
                Back to main page
              </NavLink>
              <div>
                <NavLink to={`/flashcardedit/${currentFlashCard.id}`} className="show-page-nav-link">
                  Edit Flash Card
                </NavLink>
              </div>
            </div>
            <Button onClick={handleDelete}>Delete Flash Card</Button>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default FlashCardShow;