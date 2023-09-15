import QuestionsData from "../data/QuestionData";
import {useState} from "react"
const Quiz =()=>{
    const [current,setCurrent] = useState(0)
    return(
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button>{QuestionsData[current].A}</button>
                <button>{QuestionsData[current].B}</button>
                <button>{QuestionsData[current].C}</button>
                <button>{QuestionsData[current].D}</button>
            </div>
        </div>
    )
}

export default Quiz;