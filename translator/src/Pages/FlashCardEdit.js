import React, { useState } from 'react';
import { FormGroup, Label, Input, Form, Button } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';

const FlashCardEdit = ({ flashcards, updateFlashCard }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentFlashCard = flashcards.find((flashcard) => flashcard.id === +id);
  const [editFlashCard, setEditFlashCard] = useState(currentFlashCard || {
    english: '',
    spanish: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    setEditFlashCard({ ...editFlashCard, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFlashCard(editFlashCard, currentFlashCard.id);
    navigate('/flashcardindex');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="english">English</Label>
          <Input type="text" name="english" value={editFlashCard.english} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="spanish">Spanish</Label>
          <Input type="text" name="spanish" value={editFlashCard.spanish} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="textarea" name="description" value={editFlashCard.description} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input type="text" name="image" value={editFlashCard.image} onChange={handleChange} />
        </FormGroup>
        <Button type="submit" name="submit">
          Submit Updated Flash Card
        </Button>
      </Form>
    </>
  );
};

export default FlashCardEdit;