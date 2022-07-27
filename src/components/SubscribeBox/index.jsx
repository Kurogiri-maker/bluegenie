import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import  SubscribeForm  from "./SubscribeForm";



const BoxContainer = styled.div`
  width: 850px;
  height: 650px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 100px 100px 100px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding:20px;
`;


const BackDrop = styled(motion.div)`
  width: 60%;
  height: 98%;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 30%;
  transform: rotate(60deg);
  top: -350px;
  left: -100px;
  background: rgb(87, 87, 232);
  background: linear-gradient(
    58deg,
    rgba(87, 87, 232, 1) 20%,
    rgba(87, 87, 232, 1) 100%
  );
`;
const BackDrop2 = styled(motion.div)`
  width: 60%;
  height: 85%;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 30%;
  transform: rotate(20deg);
  bottom: -350px;
  right: -100px;
  background: rgb(0, 212, 255);
  background: linear-gradient(
    58deg,
    rgba(0, 212, 255, 1) 20%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: rgb(87, 87, 232);
  z-index: 10;
  margin-bottom:10px;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  z-index: 10;
  margin: 0;
  
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  z-index: 20;
  margin-bottom: 90px;
`;


export function SubscribeBox(props){
    return <BoxContainer>
        <TopContainer>
            <BackDrop />
            <BackDrop2/>
        </TopContainer>
        <HeaderContainer>
              <HeaderText>Create an account</HeaderText>
        </HeaderContainer>
        <InnerContainer>
           <SubscribeForm/>
        </InnerContainer>
    </BoxContainer>
}