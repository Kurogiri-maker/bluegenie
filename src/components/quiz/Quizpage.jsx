import React , { useState,  useEffect }from "react";
import { ReactDOM } from "react";
import { Component, Fragment } from "react";
import { Helmet } from 'react-helmet';
import { BackDrop, BackDrop2, BoxContainer, HeaderContainer, HeaderText, InnerContainer, BottomContainer,OptionContainer, SmallText, TopContainer , Button1,Button2,Button3} from "./component";
import { Marginer } from "../marginer";
import axios from "axios";
import { createSearchParams,useNavigate} from "react-router-dom";

export function Quizpage(props){

   
    const [isLoading, setLoading] = useState(true);

    const navigate = useNavigate();

    const navigateShowScore = (score) => {
      // 👇️ navigate to /
      navigate({
        pathname:'/showScore',
        search: createSearchParams(
            {Score:score}
        ).toString() 
      });
    };

     const [currentQuestion, setCurrentQuestion] = useState(0);

     const [showScore, setShowScore] = useState(false);
     const [score, setScore] = useState(0);
    
    
    const [questions ,setQuestions] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:3000/api/questions/").then(async res => {
            setQuestions(res.data);
            console.log(questions);
            setLoading(false);
        })
    },[])

    function handleClick(event){
        event.preventDefault();
        console.log("You scored " + score + " out of 4"); 
    }

    const handleAnswerButtonClick = (answer) => {
        if (answer) {
            setScore(score + 1);  
        }
    }
    // 
    if (isLoading){
        return  <Fragment>
    <Helmet><title>Quiz page</title></Helmet>
    <BoxContainer>
        <BottomContainer>
            <Button1  onClick={() => {
                const previousQuestion = currentQuestion - 1;
                if (previousQuestion >= 0) {
                    setCurrentQuestion(previousQuestion);
                } else {
                    alert('you reached the start of the quiz');
                }
            }}>Previous</Button1>
            <Marginer direction="vertical" margin={10} />
            <Button2 onClick={() => {
                const nextQuestion = currentQuestion + 1;
                if (nextQuestion <4) {
                    setCurrentQuestion(nextQuestion);
                } else {
                    // setShowScore(true);
                    alert('you reached the end of the quiz');
                }
                }}>
                    Next
                </Button2>
            <Marginer direction="vertical" margin={10} />
            <Button3 onClick={handleClick}>Quit</Button3>
            <Marginer direction="vertical" margin={10} />
        </BottomContainer>
        <TopContainer>
             <HeaderContainer>
                <HeaderText>
                    {/* {questions[currentQuestion].description} */}
                    </HeaderText>
            </HeaderContainer>
            <BackDrop/>
            <BackDrop2/>
        </TopContainer>
       
        <InnerContainer>
            <OptionContainer >
                <SmallText>
                {/* {questions[currentQuestion].alternatives[0].text} */}
                </SmallText> 
            </OptionContainer>
            <Marginer direction="vertical" margin={10} />
           <OptionContainer >
                <SmallText>
                    {/* {questions[currentQuestion].alternatives[1].text} */}
                </SmallText>
            </OptionContainer>
            <Marginer direction="vertical" margin={10} />
            <OptionContainer >
                <SmallText>
                    {/* {questions[currentQuestion].alternatives[2].text} */}
                </SmallText>
            </OptionContainer>
            <Marginer direction="vertical" margin={10} />
           <OptionContainer >
                <SmallText>
                    {/* {questions[currentQuestion].alternatives[3].text} */}
                </SmallText>
            </OptionContainer>
            <Marginer direction="vertical" margin={10} />
        </InnerContainer>
    </BoxContainer>
</Fragment>;
    }
    else
    {
        return  <Fragment>
        <Helmet><title>Quiz page</title></Helmet>
        <BoxContainer>
            <BottomContainer>
                <Button1  onClick={ ()=> {
                        const previousQuestion = currentQuestion - 1;
                        if (previousQuestion >= 0) {
                            setCurrentQuestion(previousQuestion);
                        } else {
                            alert('you reached the start of the quiz');
                        }
                    } 
                }>Previous</Button1>
                <Marginer direction="vertical" margin={10} />
                <Button2 onClick={() => {
                    const nextQuestion = currentQuestion + 1;
                    if (nextQuestion < 4) {
                        setCurrentQuestion(nextQuestion);
                    } else 
                    {
                        navigateShowScore(score);
                    }
                    }}>
                        Next
                    </Button2>
                <Marginer direction="vertical" margin={10} />
                <Button3 ></Button3>
                <Marginer direction="vertical" margin={10} />
            </BottomContainer>
            <TopContainer>
                 <HeaderContainer>
                    <HeaderText>
                        {questions[currentQuestion].description}
                        </HeaderText>
                </HeaderContainer>
                <BackDrop/>
                <BackDrop2/>
            </TopContainer>
           
            <InnerContainer>
                <OptionContainer onClick={()=>{handleAnswerButtonClick(questions[currentQuestion].alternatives[0].isCorrect)}}>
                    <SmallText>
                    {questions[currentQuestion].alternatives[0].text}
                    </SmallText> 
                </OptionContainer>
                <Marginer direction="vertical" margin={10} />
               <OptionContainer onClick={()=>{handleAnswerButtonClick(questions[currentQuestion].alternatives[1].isCorrect)}}>
                    <SmallText>
                        {questions[currentQuestion].alternatives[1].text}
                    </SmallText>
                </OptionContainer>
                <Marginer direction="vertical" margin={10} />
                <OptionContainer onClick={()=>{handleAnswerButtonClick(questions[currentQuestion].alternatives[2].isCorrect)}}>
                    <SmallText>
                        {questions[currentQuestion].alternatives[2].text}
                    </SmallText>
                </OptionContainer>
                <Marginer direction="vertical" margin={10} />
               <OptionContainer onClick={()=>{handleAnswerButtonClick(questions[currentQuestion].alternatives[3].isCorrect)}}>
                    <SmallText>
                        {questions[currentQuestion].alternatives[3].text}
                    </SmallText>
                </OptionContainer>
                <Marginer direction="vertical" margin={10} />
            </InnerContainer>

            
        </BoxContainer>
    </Fragment>;
    
    }
   
        
    
}











// const questions = [
	// 	{
	// 		questionText: 'What is the capital of France?',
	// 		answerOptions: [
	// 			{ answerText: 'New York', isCorrect: false },
	// 			{ answerText: 'London', isCorrect: false },
	// 			{ answerText: 'Paris', isCorrect: true },
	// 			{ answerText: 'Dublin', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Who is CEO of Tesla?',
	// 		answerOptions: [
	// 			{ answerText: 'Jeff Bezos', isCorrect: false },
	// 			{ answerText: 'Elon Musk', isCorrect: true },
	// 			{ answerText: 'Bill Gates', isCorrect: false },
	// 			{ answerText: 'Tony Stark', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'The iPhone was created by which company?',
	// 		answerOptions: [
	// 			{ answerText: 'Apple', isCorrect: true },
	// 			{ answerText: 'Intel', isCorrect: false },
	// 			{ answerText: 'Amazon', isCorrect: false },
	// 			{ answerText: 'Microsoft', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'How many Harry Potter books are there?',
	// 		answerOptions: [
	// 			{ answerText: '1', isCorrect: false },
	// 			{ answerText: '4', isCorrect: false },
	// 			{ answerText: '6', isCorrect: false },
	// 			{ answerText: '7', isCorrect: true },
	// 		],
	// 	},
	// ];