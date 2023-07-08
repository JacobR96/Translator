import React from 'react';
import {
  FormGroup,
  Label,
  Input,
  Form,
  Button
} from 'reactstrap';

const Main = () => {
  return (
    <div className="container">
      <h1 className="title">What can I translate for you?</h1>
      <Form>
      <FormGroup>
    <Label for="exampleSelect">
      Whats your Language
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        English
      </option>
      <option>
        Spanish
      </option>
      <option>
        TBD
      </option>
      <option>
        TBD
      </option>
      <option>
        TBD
      </option>
    </Input>
  </FormGroup>
  

        <div className="textarea-container">
          <FormGroup>
            <Label for="exampleText">Type</Label>
            <Input id="exampleText" name="text" type="textarea" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Type</Label>
            <Input id="exampleText" name="text" type="textarea" />
          </FormGroup>
        </div>

        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
}

export default Main;
