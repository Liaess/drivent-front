import React from "react";
import Cards from "react-credit-cards";
import styled from "styled-components";
import "react-credit-cards/es/styles-compiled.css";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
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
        />
        <CreditCardForm>
          <div>
            <GeneralCreditCardInput
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <FillingExample>E.g.: 49..., 51..., 36..., 37...</FillingExample>
          </div>
          <GeneralCreditCardInput
            type="tel"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <FormLastLine>
            <ValidThruInput
              type="tel"
              name="expiry"
              placeholder="Valid Thru"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <CVCInput
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </FormLastLine>
        </CreditCardForm>
      </CreditCardFormHolder>
    );
  }
}

const CreditCardFormHolder = styled.div`
  display: flex;
`;

const CreditCardForm = styled.form`
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

  ::placeholder,
  ::-webkit-input-placeholder {
    padding-left: 8px;
  }
  :-ms-input-placeholder {
    padding-left: 8px;
  }
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
