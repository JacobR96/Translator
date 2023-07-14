import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';

const FlashCardNew = ({ createFlashCard }) => {
  const [newFlashCard, setNewFlashCard] = useState({
    english: '',
    spanish: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setNewFlashCard({ ...newFlashCard, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    createFlashCard(newFlashCard);
    navigate('/flashcardindex');
  };
  

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="english">English</Label>
          <Input type="text" name="english" onChange={handleChange} value={newFlashCard.english} />
        </FormGroup>
        <FormGroup>
          <Label for="spanish">Spanish</Label>
          <Input type="text" name="spanish" onChange={handleChange} value={newFlashCard.spanish} />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="textarea" name="description" onChange={handleChange} value={newFlashCard.description} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input type="text" name="image" onChange={handleChange} value={newFlashCard.image} />
        </FormGroup>
      </Form>
      <Button onClick={handleSubmit} name="submit">
        Submit Flash Card
      </Button>
    </>
  );
};

export default FlashCardNew;