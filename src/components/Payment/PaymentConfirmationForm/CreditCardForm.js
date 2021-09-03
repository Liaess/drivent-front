import React from "react";
import Cards from "react-credit-cards";
import styled from "styled-components";
import "react-credit-cards/es/styles-compiled.css";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./InputHandlers";

export default class CreditCardForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    issuer: "",
    isValid: false,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
    this.setState({ isValid });
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;

    console.log(this.state);
  };

  render() {
    return (
      <CreditCardFormHolder id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
          callback={this.handleCallback}
        />
        <CreditCardFormFields onSubmit={this.handleSubmit}>
          <div>
            <GeneralCreditCardInput
              type="tel"
              name="number"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <FillingExample>E.g.: 49..., 51..., 36..., 37...</FillingExample>
          </div>
          <GeneralCreditCardInput
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <FormLastLine>
            <ValidThruInput
              type="tel"
              name="expiry"
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <CVCInput
              type="tel"
              name="cvc"
              placeholder="CVC"
              pattern="\d{3,4}"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </FormLastLine>
        </CreditCardFormFields>
      </CreditCardFormHolder>
    );
  }
}

const CreditCardFormHolder = styled.div`
  display: flex;
  margin-bottom: 60px;
  padding-left: 0;
  max-width: 720px;
`;

const CreditCardFormFields = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  justify-content: space-around;
`;

const GeneralCreditCardInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #999999;
  padding-left: 8px;
`;

const ValidThruInput = styled(GeneralCreditCardInput)`
  width: 270px;
  margin-right: 30px;
`;

const CVCInput = styled(GeneralCreditCardInput)`
  width: 100px;
`;

const FillingExample = styled.p`
  margin-top: 3px;
  padding-left: 4px;
  color: #999999;
  font-size: 12px;
`;

const FormLastLine = styled.div`
  display: flex;
`;
