import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AttemptQuestion() {
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    async function fetchQuiz() {
      const response = await axios.get('http://localhost:8070/Quiz');
      setQuiz(response.data);
    }
    fetchQuiz();
  }, []);

  function handleAnswerClick(answer) {
    setSelectedAnswer(answer);
    if (answer === quiz[currentQuestion].Answer) {
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }
  }

  function handleNextQuestion() {
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  function handlePreviousQuestion() {
    setSelectedAnswer(null);
    setCorrectAnswer(null);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  if (quiz.length === 0) {
    return <div>Loading...</div>;
  }

  const question = quiz[currentQuestion];

  return (
    
    <div>

    {/* Top Navigation Start */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/AdminPanel">
              Zoo management system
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/attemptquestion">
                    Take a Quiz
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/events">
                    <span className="sr-only">(current)</span>Events
                  </a>
                </li>
              </ul>
              <div>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
              </div>
            </div>
          </nav>
          {/* Top Navigation End */}

      <div classname="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mt-5">
            <div className="card-header">
              <h3 className="text-center">{question.Question}</h3>
            </div>
            <div className="card-body">
              <div className="row">
                {['Answer_1', 'Answer_2', 'Answer_3', 'Answer_4'].map((answerKey) => (
                  <div key={answerKey} className="col-sm-6 mb-3">
                    <button
                      className="btn btn-block btn-outline-primary"
                      onClick={() => handleAnswerClick(question[answerKey])}
                      disabled={selectedAnswer !== null}
                    >
                      {question[answerKey]}
                    </button>
                  </div>
                ))}
              </div>
              {selectedAnswer !== null && (
                <div className="mt-4">
                  <p className={correctAnswer ? 'text-success' : 'text-danger'}>
                    {correctAnswer ? 'Correct!' : `Wrong! The correct answer is ${question.Answer}`}
                  </p>
                </div>
              )}
              <div className="mt-4">
                <button
                  className="btn btn-secondary mr-2"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                >
                  Previous Question
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleNextQuestion}
                  disabled={currentQuestion === quiz.length - 1}
                >
                  Next Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div></div>
    </div>
  );
}

export default AttemptQuestion;
