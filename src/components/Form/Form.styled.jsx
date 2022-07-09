import styled from "styled-components";
import { Field, Form } from "formik";

export const FormPhoneBook = styled(Form)`
  border-color: black;
  border-style: solid;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  border-radius: 4px;
`;
export const LabelPhoneBook = styled.label`
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;
`;

export const InputPhoneBook = styled(Field)`
  margin-top: 5px;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 400;
  border: 2px solid #edf2f7;
  background-color: #f7fafc;
  color: #2d3748;
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    outline: none;
    border: 2px solid #4299e1;
  }
  &:invalid {
    border: 2px solid #ff7d87;
    box-shadow: none;
  }
`;

export const ButtonPhoneBook = styled.button`
  display: inline-flex;
  margin-top: 10px;
  padding: 5px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 400;
  background-color: gold;

  :hover {
    background-color: royalblue;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const ErrorPhoneBook = styled.div`
  font-size: 12px;
  color: #e53e3e;

  margin-top: 0.25rem;
`;
