import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import styled from '@emotion/styled';
import Form from '../components/Form';
import { postPoll } from '../api/polls';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const [question, setQuestion] = React.useState('');
  const [answerOne, setAnswerOne] = React.useState('');
  const [answerTwo, setAnswerTwo] = React.useState('');
  const [answerThree, setAnswerThree] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      votes: []
    };

    const createdPoll = await postPoll(poll);
    history.push(`/polls/${createdPoll.id}/vote`);
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
        <Button disabled={isLoading}>Create Poll</Button>
      </Form>
    </Card>
  );
}

export default Add;
