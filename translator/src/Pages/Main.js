import React, { useState } from 'react';
import { FormGroup, Label, Input, Form, Button } from 'reactstrap';
import wordbank from '../Components/wordBank';
import spanishwordbank from '../Components/spanishBank';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const translateText = () => {
    const toArray = inputValue.split(' ');

    let translatedText;
    if (selectedLanguage === 'English') {
      const results = toArray.map((word) => wordbank[word] || word);
      translatedText = results.join(' ');
    } else if (selectedLanguage === 'Spanish') {
      const results = toArray.map((word) => spanishwordbank[word] || word);
      translatedText = results.join(' ');
    } else {
      // Handle translations for other languages
    }

    setOutputValue(translatedText);
  };

  return (
    <div className="container">
      <h1 className="title">What can I translate for you?</h1>
      <Form>
        <FormGroup>
          <Label for="exampleSelect">What's your Language</Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
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
          <input type="text" value={outputValue} placeholder="Output" readOnly />
        </div>

        <div className="mainpage_submit">
          <Button color="primary" onClick={translateText}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Main;