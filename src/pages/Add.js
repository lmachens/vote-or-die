import React from 'react';
import Card from '../components/Card';
import './Add.css';
import Button from '../components/Button';

function Add() {
  const [question, setQuestion] = React.useState('');
  const [answerOne, setAnswerOne] = React.useState('');
  const [answerTwo, setAnswerTwo] = React.useState('');
  const [answerThree, setAnswerThree] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree
    };

    const response = await fetch(process.env.REACT_APP_POLLS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(poll)
    });
    const createdPoll = await response.json();
    alert(`Created poll with the id ${createdPoll.id}`);
  }

  return (
    <Card>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          className="add-form__input add-form__input-question"
          type="text"
          placeholder="Enter question"
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
        <input
          className="add-form__input add-form__input-answer"
          type="text"
          placeholder="First answer"
          value={answerOne}
          onChange={event => {
            setAnswerOne(event.target.value);
          }}
        />
        <input
          className="add-form__input add-form__input-answer"
          type="text"
          placeholder="Second answer"
          value={answerTwo}
          onChange={event => {
            setAnswerTwo(event.target.value);
          }}
        />
        <input
          className="add-form__input add-form__input-answer"
          type="text"
          placeholder="Third answer"
          value={answerThree}
          onChange={event => {
            setAnswerThree(event.target.value);
          }}
        />
        <Button>Create Poll</Button>
      </form>
    </Card>
  );
}

export default Add;
