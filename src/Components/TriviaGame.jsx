import { useEffect, useState } from "react";
import Question from "./Question";

export default function TriviaGame( { url } ) {

    const [trivia, setTrivia] = useState([])
    const [questions, setQuestions] = useState([])
    
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((response) => response.results)
        .then((response) => setTrivia([...response]))
        .catch(error => console.error(error))      
    },[])
    
    useEffect(()=>{
        setQuestions([...trivia])       
    },[trivia.length])

    return (
        <div>
            <div className="card">
                {questions.map((question, i) => <Question key={i} question={question}/>)}
            </div>
        </div>
    );
}