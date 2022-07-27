import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Button,
} from "./common";
import { Marginer } from "../marginer";

export default function SubscribeForm(props) {

  return (
    <BoxContainer>
    <FormContainer>
      <Input type="password" placeholder="First Name" />
    </FormContainer>
    <FormContainer>
      <Input type="password" placeholder="Last Name" />
    </FormContainer>
    <FormContainer>
      <Input type="email" placeholder="Email" />
    </FormContainer>
    <FormContainer>
      <Input type="password" placeholder="Password" />
    </FormContainer>
    <Marginer direction="vertical" margin={10} />
    <SubmitButton type="submit" >Create account</SubmitButton>
    <Marginer direction="vertical" margin={10} />
    <Button type="submit">Sign in</Button>
    <Marginer direction="vertical" margin="1em" />
  </BoxContainer>
  );
}