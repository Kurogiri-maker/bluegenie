import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:auto;
  background-color: transparent;
`;

export const FormContainer = styled.form`
  width: 70%;
  height:50px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  margin-bottom: 10px;
  border-radius: 100px ;
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(87, 87, 232);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height:50px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  border-radius: 100px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(87, 87, 232);
  }
`;

export const SubmitButton = styled.button`
  width: 70%;
  height: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-align: match-parent;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(87, 87, 232);
  background: linear-gradient(
    58deg,
    rgba(87, 87, 232, 1) 20%,
    rgba(87, 87, 232, 1) 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;

export const Button = styled.button`
  width: 70%;
  height: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-align: match-parent;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #fcb045;
  background: linear-gradient(
    58deg,
    #fcb045 20%,
    #fcb045 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;