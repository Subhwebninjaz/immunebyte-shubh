import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CostForm = () => {
  const [formData, setFormData] = useState({

    email: "",
    contract_number: "",
    loc:"",
    git_name:"",
    tele_id:"",
    select_one: "",
    select_type:"",
    select_bchain:"",
    select_complexity:"",
    select_doc:"",
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

      <h4>Get Your Audit Cost Estiation</h4>

      <Form.Group controlId="formBasicSelect">
      <Form.Label>Is Your smart Contract Developed?<span>*</span></Form.Label>
        <Form.Control as="select" name="select_one" className="cu-audit" value={formData.select_one} onChange={handleFormChange} > 
          <option value="">Yes</option> 
          <option value="no">No</option>
         </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicSelect">
      <Form.Label>Type Of Contract?</Form.Label>
        <Form.Control as="select" name="select_type" className="cu-audit" value={formData.select_type} onChange={handleFormChange} > 
          <option value="">Token Contract</option> 
          <option value="no">Algorand Contract</option>
          <option value="arbitrum">Arbitrum Contract</option>
          <option value="aurora">Aurora Contract</option>
          <option value="avalanche">Avalanche Contract</option>
          <option value="bsc">Bsc Contract</option>
          <option value="cardano">Cardano Contract</option>
          <option value="celo">Celo Contract</option>
          <option value="dapp">Dapp Contract</option>
          <option value="defi">Defi Contract</option>
          <option value="ethereum">Ethereum Contract</option>
          <option value="fantom">Fantom Contract</option>
          <option value="flow">Flow Contract</option>
          <option value="near">Near Contract</option>
          <option value="nft">Nft Contract</option>
          <option value="optimism">Optimism Contract</option>
          <option value="polkadot">Polkadot Contract</option>
          <option value="polygon">Polygon Contract</option>
          <option value="rust">Rust Contract</option>
          <option value="solana">Solana Contract</option>
          <option value="solidity">Solidity Contract</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicSelect">
      <Form.Label>Which Block Chain Framework Is used For Smart Contract?</Form.Label>
        <Form.Control as="select" name="select_bchain" className="cu-audit" value={formData.select_bchain} onChange={handleFormChange} > 
          <option value="">Ethereum</option> 
          <option value="no">No</option>
         </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Number Of Smart Contract</Form.Label>
        <Form.Control type="text" placeholder="" name="contract_number" value={formData.contract_number} onChange={handleFormChange} />
      </Form.Group>

      <Form.Group controlId="formBasicSelect">
      <Form.Label>What Is The Complexity Of Smart Contract?</Form.Label>
        <Form.Control as="select" name="select_complexity" className="cu-audit" value={formData.select_complexity} onChange={handleFormChange} > 
          <option value="">Low</option> 
          <option value="medium">Medium</option>
          <option value="high">High</option>
         </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicSelect">
      <Form.Label>Do You Have Any Docomentation Of Your Smart Contract?</Form.Label>
        <Form.Control as="select" name="select_doc" className="cu-audit" value={formData.select_doc} onChange={handleFormChange} > 
          <option value="">Yes</option> 
          <option value="no">No</option>
         </Form.Control>
      </Form.Group>

      <Form.Group controlId="formBasicDate">
      <Form.Label>What Is Your Timeline For The Completion Of Audit?</Form.Label>
        <Form.Control type="date" name="date" placeholder="dd-mm-YYYY" value={formData.date} onChange={handleFormChange} />
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Estimated LOC(Line Of Code)</Form.Label>
        <Form.Control type="text" placeholder="" name="loc" value={formData.loc} onChange={handleFormChange} />
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label> Please Input Your Github /Gitlab Link Or Smart Contract Link</Form.Label>
        <Form.Control type="email" placeholder="" name="git_name" value={formData.git_name} onChange={handleFormChange} />
      </Form.Group>

      <Form.Group controlId="formBasicName">
        <Form.Label>Please Input Your Telegram ID</Form.Label>
        <Form.Control type="email" placeholder="" name="tele_id" value={formData.tele_id} onChange={handleFormChange} />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Please Input Your Email ID</Form.Label>
        <Form.Control type="email" placeholder="" name="email" value={formData.email} onChange={handleFormChange} isInvalid={emailError} />
        <Form.Control.Feedback type="invalid"> Please provide a valid email address. </Form.Control.Feedback>
      </Form.Group>

      <Button className="btn btn-fill" type="submit">Submit</Button>
    </Form>
  );
};

export default CostForm;