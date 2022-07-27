import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";

export default function LoginForm(props) {

  return (
    <BoxContainer>
    <FormContainer>
      <Input type="email" placeholder="Email" />
    </FormContainer>
    <FormContainer>
      <Input type="password" placeholder="Password" />
    </FormContainer>
    <Marginer direction="vertical" margin={10} />
    <MutedLink href="#">Forget your password?</MutedLink>
    <Marginer direction="vertical" margin="1.6em" />
    <SubmitButton type="submit">Signin</SubmitButton>
    <Marginer direction="vertical" margin="1em" />
    <MutedLink href="#">
      Don't have an accoun?{" "}
      <BoldLink href="#" >
        Signup
      </BoldLink>
    </MutedLink>
  </BoxContainer>
  );
}