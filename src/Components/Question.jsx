import { useState } from "react"
import { Link } from "react-router-dom"
export default function Question({ question }) {

    const [answer, setAnswer] = useState("")
    const [correctShow, setCorrectShow] = useState("none")
    const [wrongShow, setWrongShow] = useState("none")
    const [hide, setHide] = useState("block")
    const [display, setDisplay] = useState("none")

    const correct = question.correct_answer
    const choices = (question.incorrect_answers.concat([question.correct_answer])).sort()

    function handleClick(e) {
        if (e.target.value === correct) {
            e.target.style.color = "green"
            setAnswer("You Are Correct!")
            setCorrectShow("block")
            setWrongShow("none")
            setHide("none")
            setDisplay("block")
        } else {
            e.target.style.color = "red"
            setAnswer("You Are Wrong!")
            setWrongShow("block")
        }
    }

    return (
    <div className="card">
        <h2>{question.category}</h2>
        <p>{question.question.replace(/&quot;|&#039;/g, "'")}</p>
        <p>{answer}</p>
        <Link to="/form">
            <button className="play__button" style={{display:correctShow}}>Get New Question</button>
        </Link>
        <p style={{display:display}}>{correct}</p>
            <button className="play__button" style={{display:wrongShow}}>Try Again!</button>
        {choices.map((choice,i) => <input style={{display:hide}} className="answer__choices" type="button" key={i} onClick={handleClick} value={choice} />)}
    </div>
    )
}