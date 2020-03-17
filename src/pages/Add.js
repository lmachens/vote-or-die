import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

const QuestionInput = styled(Input)`
  background: #fff;
  border: 1px solid #707070;
  border-radius: 10px;
  padding: 6px 10px;
  font-weight: bold;
`;

const AnswerInput = styled(Input)`
  background: none;
  border: none;
  border-bottom: 1px solid #707070;
  padding: 6px 10px;
`;

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

    const response = await fetch(
      process.env.REACT_APP_POLLS_API ||
        'https://my-json-server.typicode.com/lmachens/vote-or-die/polls',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(poll)
      }
    );
    const createdPoll = await response.json();
    alert(`Created poll with the id ${createdPoll.id}`);
  }

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <QuestionInput
          type="text"
          placeholder="Enter question"
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
        <AnswerInput
          type="text"
          placeholder="First answer"
          value={answerOne}
          onChange={event => {
            setAnswerOne(event.target.value);
          }}
        />
        <AnswerInput
          type="text"
          placeholder="Second answer"
          value={answerTwo}
          onChange={event => {
            setAnswerTwo(event.target.value);
          }}
        />
        <AnswerInput
          type="text"
          placeholder="Third answer"
          value={answerThree}
          onChange={event => {
            setAnswerThree(event.target.value);
          }}
        />
        <Button>Create Poll</Button>
      </Form>
    </Card>
  );
}

export default Add;
