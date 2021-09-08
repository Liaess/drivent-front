import styled from "styled-components";

const CreditCardFormHolder = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  max-width: 720px;
`;

const ButtonSeparator = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

const CreditCardFormFields = styled.div`
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

export {
  CreditCardFormHolder,
  ButtonSeparator,
  CreditCardFormFields,
  GeneralCreditCardInput,
  ValidThruInput,
  CVCInput,
  FillingExample,
  FormLastLine,
};
