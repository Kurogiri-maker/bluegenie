import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function Example() {
     
}



export function AccountBox(props){
    return <BoxContainer>
        <TopContainer>
            <BackDrop />
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please Sign-in to continue</SmallText>
            </HeaderContainer>
            <BackDrop2/>
        </TopContainer>
        <InnerContainer>
        </InnerContainer>
    </BoxContainer>
}