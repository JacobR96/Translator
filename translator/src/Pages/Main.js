import React, { useState } from 'react';
import { FormGroup, Label, Input, Form, Button } from 'reactstrap';
import wordBank from '../Components/wordBank';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const translateToSpanish = () => {
    const toArray = inputValue.split(' ');
    const results = toArray.map((word) => wordBank[word] || word);
    const translatedText = results.join(' ');
    setOutputValue(translatedText);
  };

  return (
    <div className="container">
      <h1 className="title">What can I translate for you?</h1>
      <Form>
        <FormGroup>
          <Label for="exampleSelect">What's your Language</Label>
          <Input id="exampleSelect" name="select" type="select">
            <option>English</option>
            <option>Spanish</option>
            <option>TBD</option>
            <option>TBD</option>
            <option>TBD</option>
          </Input>
        </FormGroup>

        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Input"
          />
        </div>
        <div>
          <input
            type="text"
            value={outputValue}
            placeholder="Output"
            readOnly
          />
        </div>

        <div className="mainpage_submit">
          <Button color="primary" onClick={translateToSpanish}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Main;
