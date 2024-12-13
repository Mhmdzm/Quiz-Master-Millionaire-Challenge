import { useState } from "react";
import "./app.css"
import Trivia from "./comp/Trivia";



function App() {
  const [questionNumber,setQuestionNumber] = useState(1);
  const [stop,setStop]=useState(false);
  const [earnd,setEarnd]=useState("$ 0");
  const data =[
    {id:1,
    question:"What is the capital of France?",
    answers:[{
      text:"Berlin",
      correct:false
    },
    {
      text:"London",
      correct:false
    },
    {
      text:"Paris",
      correct:true
    },
    {
      text:"Rome",
      correct:false
    }]
  },{id:2,
      question:"Which planet is known as the Red Planet?",
      answers:[{
        text:"Earth",
        correct:false
      },
      {
        text:"Mars",
        correct:true
      },
      {
        text:"Jupiter",
        correct:false
      },
      {
        text:"Saturn",
        correct:false
      }]
    },
      {id:3,
        question:"What is the largest ocean on Earth?",
        answers:[{
          text:"Atlantic Ocean",
          correct:false
        },
        {
          text:"Arctic Ocean",
          correct:false
        },
        {
          text:"Indian Ocean",
          correct:false
        },
        {
          text:"Pacific Ocean",
          correct:true
        }]
    }
  ];
  const moneyPyramid = [
    {id:1,amount:"$ 100"},
    {id:2,amount:"$ 200"},
    {id:3,amount:"$ 300"},
    {id:4,amount:"$ 500"},
    {id:5,amount:"$ 1000"},
    {id:6,amount:"$ 2000"},
    {id:7,amount:"$ 4000"},
    {id:8,amount:"$ 8000"},
    {id:9,amount:"$ 16000"},
    {id:10,amount:"$ 32000"},
    {id:11,amount:"$ 64000"},
    {id:12,amount:"$ 125000"},
    {id:13,amount:"$ 250000"},
    {id:14,amount:"$ 500000"},
    {id:15,amount:"$ 1000000"},
  ].reverse();
  return (
    <div className="App">
      <div className="main">
        {stop ? <h1>You Earnd:{earnd} </h1> : (
          <>
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia data={data} setStop={setStop}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          />
        </div>
        </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
        {
          moneyPyramid.map(m=>(
            <li className={questionNumber === m.id ? "moneyListIteam active" : "moneyListIteam"}>
            <span className="moneyListIteamNumber ">{m.id}</span>
            <span className="moneyListIteamAmount">{m.amount}</span>
          </li>
          ))
        }
          


        </ul>
      </div>
    </div>
  );
}

export default App;
