import React from "react";
import Cards from "react-credit-cards";
import { Finish } from "../utils/PaymentWrapper";
import "react-credit-cards/es/styles-compiled.css";
import {
  CreditCardFormHolder,
  ButtonSeparator,
  CreditCardFormFields,
  GeneralCreditCardInput,
  ValidThruInput,
  CVCInput,
  FillingExample,
  FormLastLine,
} from "./FormStyles";
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
    this.props.ticket
      .updatePayment({ ...this.props.ticketData, isPaid: true })
      .then((res) => {
        this.props.setTicketData(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  render() {
    return (
      <CreditCardFormHolder onSubmit={this.handleSubmit} id="PaymentForm">
        <ButtonSeparator>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
            callback={this.handleCallback}
          />
          <CreditCardFormFields>
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
        </ButtonSeparator>
        <Finish>FINALIZAR PAGAMENTO</Finish>
      </CreditCardFormHolder>
    );
  }
}
