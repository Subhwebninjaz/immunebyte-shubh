import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const HelpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [emailError, setEmailError] = useState(false);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // email-validation
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(formData.email)) {
      // submit form here
      console.log("form fields are OK, now write code for submission");
    } else {
      setEmailError(true);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <Form className="cu-form" onSubmit={handleFormSubmit}>

      <h4>Let Us Know !</h4>

      <div className="fl-name">
        <Form.Group controlId="formBasicName">
          <Form.Label>First Name<span>*</span></Form.Label>
          <Form.Control type="text" placeholder="" name="name" value={formData.name} onChange={handleFormChange} />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Last Name<span>*</span></Form.Label>
          <Form.Control type="text" placeholder="" name="last_name" value={formData.last_name} onChange={handleFormChange} />
        </Form.Group>
      </div>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email<span>*</span></Form.Label>
        <Form.Control type="email" placeholder="" name="email" value={formData.email} onChange={handleFormChange} isInvalid={emailError} />
        <Form.Control.Feedback type="invalid"> Please provide a valid email address. </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Messeage</Form.Label>
        <Form.Control as="textarea"  rows={8} placeholder="" name="message" value={formData.message} onChange={handleFormChange} />
      </Form.Group>

  



      <Button className="btn btn-fill" type="submit">Submit</Button>
    </Form>
  );
};

export default HelpForm;