import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./comp/Trivia";
import Timer from "./comp/Timer";
import Start from "./comp/Start";
import { questions, moneyPyramid } from "./comp/Data";  // 

function App() {
    const [userName, setUserName] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earnd, setEarnd] = useState("$ 0");

    useEffect(() => {
        if (questionNumber > 1) {
            setEarnd(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
        }
    }, [moneyPyramid, questionNumber]);

    return (
        <div className="App">
            {userName ? (
                <>
                    <div className="main">
                        {stop ? (
                            <h1 className="endText">You Earnd: {earnd}</h1>
                        ) : (
                            <>
                                <div className="top">
                                    <div className="timer">
                                        <Timer setStop={setStop} questionNumber={questionNumber} />
                                    </div>
                                </div>
                                <div className="bottom">
                                    <Trivia
                                        data={questions}
                                        setStop={setStop}
                                        questionNumber={questionNumber}
                                        setQuestionNumber={setQuestionNumber}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                    <div className="pyramid">
                        <ul className="moneyList">
                            {moneyPyramid.map((m) => (
                                <li
                                    key={m.id}
                                    className={questionNumber === m.id ? "moneyListIteam active" : "moneyListIteam"}
                                >
                                    <span className="moneyListIteamNumber">{m.id}</span>
                                    <span className="moneyListIteamAmount">{m.amount}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <Start setUserName={setUserName} />
            )}
        </div>
    );
}

export default App;
