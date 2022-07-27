import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/AccountBox";
import { SubscribeBox } from "./components/SubscribeBox";
import { Quizpage } from "./components/quiz/Quizpage";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { ShowScore } from "./components/quiz/showScore";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App(){
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route exact path="/quiz" element={<Quizpage/>}/>
          <Route exact path="/showScore" element={<ShowScore/>}/>
        </Routes>
      </Router>
   
    </AppContainer>
   
  );
}
  

export default App;
