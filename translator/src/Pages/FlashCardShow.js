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
    <main style={{ width: '80%', margin: '0 auto' }}>
      <div className="flashcard">
        <Card style={{ width: '100%' }}>
          <img alt={currentFlashCard.english} src={currentFlashCard.image} style={{ width: '80%', height: '80%' }} />
          <CardBody>
            <CardTitle tag="h5">{currentFlashCard.english}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Spanish: {currentFlashCard.spanish}
            </CardSubtitle>
            <CardText>
              <p>{currentFlashCard.description}</p>
            </CardText>
            <NavLink to="/flashcardindex" className="nav-link">
              Back to main page
            </NavLink>
            <Button onClick={handleDelete}>Delete Flash Card</Button>
          </CardBody>
          <NavLink to={`/flashcardedit/${currentFlashCard.id}`} className="nav-link">
            Edit Flash Card
          </NavLink>
        </Card>
      </div>
    </main>
  );
};

export default FlashCardShow;