import styled from "styled-components";
import { motion } from "framer-motion";

export const BoxContainer = styled.div`
  width: 60%;
  height: 95%;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 100px 100px 100px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding:20px;
`;


export const BackDrop = styled(motion.div)`
  width: 72%;
  height: 119%;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 30%;
  transform: rotate(60deg);
  top: -350px;
  left: -100px;
  background: #F2DF3A;
  background: linear-gradient(
    58deg,
    #F2DF3A; 20%,
    #F2DF3A; 100%
  );
`;
export const BackDrop2 = styled(motion.div)`
  width: 60%;
  height: 85%;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 30%;
  transform: rotate(20deg);
  bottom: -350px;
  right: -100px;
  background: #3AB4F2;
  background: linear-gradient(
    58deg,
    #3AB4F2 20%,
    #3AB4F2 100%
  );
`;

export const HeaderContainer = styled.div`
  width: 70%;
  height: 60px;
  align-items: center;
  margin: auto ;
  display: flex;
  flex-direction: column;
  border: 2px solid  #ffff;
  border-radius: 100px 100px 100px 100px;
  background: #0078AA;
  background: linear-gradient(
    58deg,
    #0078AA 20%,
    #0078AA 100%
  );
  z-index: 10;

`;

export const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color:  #ffff;
  z-index: 10;
  margin: auto;
`;

export const SmallText = styled.h5`
  color: #000000;
  font-weight: 500;
  font-size: 20px;
  z-index: 10;
  text-align: center;
  
`;

export const InnerContainer = styled.div`
  width: 100%;
  padding: 20px;
  z-index: 20;
  margin-top: 10px;
  margin-left: 130px;

`;

export const BottomContainer = styled.div`
  width: 100%;
  padding: 30px;
  z-index: 20;
  margin-left: 650px;
`;

export const OptionContainer = styled.div`
  width: 70%;
  height: 50px;
  border: 2px solid #0078AA;
  border-radius: 100px 100px 100px 100px;
  background: #ffff;
  background: linear-gradient(
    58deg,
    #ffff 20%,
    #ffff 100%
  );
  z-index: 10;
  

`;

export const Button1 = styled.button`
  width: 20%;
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

export const Button2 = styled.button`
  width: 20%;
  height: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-align: match-parent;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(26, 141, 57);
  background: linear-gradient(
    58deg,
    rgba(26, 141, 57, 1) 20%,
    rgba(26, 141, 57, 1) 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;

export const Button3 = styled.button`
  width: 20%;
  height: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-align: match-parent;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(255, 0, 0);
  background: linear-gradient(
    58deg,
    rgba(255, 0, 0, 1) 20%,
    rgba(255, 0, 0, 1) 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;