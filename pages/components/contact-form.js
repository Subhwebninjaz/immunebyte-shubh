import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    company_name: "",
    git_name: "",
    user_name: "",
    select: "",
    date: "",
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

      <h4>Quick Application For Audit</h4>

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
        <Form.Label>Company Name<span>*</span></Form.Label>
        <Form.Control type="text" placeholder="" name="company_name" value={formData.company_name} onChange={handleFormChange} />
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Github Link/Smart Contract Address<span>*</span></Form.Label>
        <Form.Control type="text" placeholder="" name="git_name" value={formData.git_name} onChange={handleFormChange} />
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Username- Telegram/Skype/Twitter</Form.Label>
        <Form.Control type="text" placeholder="" name="user_name" value={formData.user_name} onChange={handleFormChange} />
      </Form.Group>

      <Form.Group controlId="formBasicSelect">
        <Form.Control as="select" name="select" className="cu-audit" value={formData.select} onChange={handleFormChange} > 
          <option value="">Type Of Audit Service (Required)</option> 
          <option value="defi">DeFi Audit</option> 
          <option value="token">Token Audit</option> 
          <option value="nft">NFT Audit</option> 
          <option value="dapp">dApp Audit</option> 
          <option value="dex">DEX Audit</option> 
         </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicDate">
        <Form.Control type="date" name="date" placeholder="dd-mm-YYYY" value={formData.date} onChange={handleFormChange} />
      </Form.Group>

      <Button className="btn btn-fill" type="submit">Submit</Button>
    </Form>
  );
};

export default ContactForm;