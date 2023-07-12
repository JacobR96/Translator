import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { NavLink } from "react-router-dom"


const FlashCardIndex = ({ flashcards }) => {
  console.log(flashcards);

  return (
    <main className="flashcard-index-cards">
      {flashcards?.map((flashcard, index) => (
        <Card style={{ width: "14rem" }} key={index}>
          <img
            alt={` ${flashcard.english}`}
            src={flashcard.image}
            style={{ width: "250px", height: "250px" }}
          />
          <CardBody>
            <CardTitle tag="h5">{flashcard.english}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Spanish {flashcard.spanish}
            </CardSubtitle>
            <CardText>
              <p>{flashcard.description}</p>
            </CardText>
            <NavLink to={`/flashcardshow/${flashcard.id}`} className="nav-link">
  See More Details
</NavLink>
          </CardBody>
        </Card>
      ))}
    </main>
  );
};

export default FlashCardIndex;
