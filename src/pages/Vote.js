import React from 'react';
import Card from '../components/Card';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import RadioInput from '../components/RadioInput';
import { patchPoll } from '../api/polls';
import Loading from '../components/Loading';
import useGetPoll from '../hooks/useGetPoll';

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [answer, setAnswer] = React.useState(null);
  const [isLoadingPatchPoll, setIsLoadingPatchPoll] = React.useState(false);
  const { poll, isLoading: isLoadingGetPoll, errorMessage } = useGetPoll(
    pollId
  );

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoadingPatchPoll(true);

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await patchPoll(pollId, newPoll);
    history.push(`/polls/${poll.id}`);
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  if (isLoadingGetPoll) {
    return <Loading />;
  }

  const options = ['answerOne', 'answerTwo', 'answerThree'];
  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <h2>{poll.question}</h2>
        {options.map(option => (
          <RadioInput
            key={option}
            checked={answer === option}
            onChange={event => setAnswer(event.target.value)}
            value={option}
            label={poll[option]}
            name="answer"
          />
        ))}
        <Button disabled={isLoadingPatchPoll}>Vote</Button>
      </Form>
    </Card>
  );
}

export default Vote;
