import React from 'react';
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { NavLink } from "react-router-dom"

const FlashCardShow = ({ flashcards }) => {
  const { id } = useParams();
  let currentFlashCard = flashcards.find((flashcard) => flashcard.id === +id);
  console.log(currentFlashCard);

  return (
    <main style={{ width: "80%", margin: "0 auto" }}>
      <Card style={{ width: "100%" }}>
        <img
          alt={` ${currentFlashCard.english}`}
          src={currentFlashCard.image}
          style={{ width: "80%", height: "80%" }}
        />
        <CardBody>
          <CardTitle tag="h5">{currentFlashCard.english}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Spanish {currentFlashCard.spanish}
          </CardSubtitle>
          <CardText>
            <p>{currentFlashCard.description}</p>
          </CardText>
          <NavLink to={"/flashcardindex"} className="nav-link">
            back to main page
          </NavLink>
          <NavLink to="/flashcardindex">
  <Button>Delete Flash Card</Button>
</NavLink>
        </CardBody>
      </Card>
    </main>
  );
};

export default FlashCardShow;
