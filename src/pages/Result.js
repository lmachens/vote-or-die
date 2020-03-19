import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import PieChart from 'react-minimal-pie-chart';
import Loading from '../components/Loading';
import useGetPoll from '../hooks/useGetPoll';

function Result() {
  const { pollId } = useParams();
  const { poll, isLoading, errorMessage } = useGetPoll(pollId);

  const answerOneVotes =
    poll?.votes.filter(vote => vote === 'answerOne').length || 0;
  const answerTwoVotes =
    poll?.votes.filter(vote => vote === 'answerTwo').length || 0;
  const answerThreeVotes =
    poll?.votes.filter(vote => vote === 'answerThree').length || 0;

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Card>
      <h2>
        {poll?.question} ({poll?.votes.length} votes)
      </h2>
      <div>
        {poll?.answerOne} ({answerOneVotes} votes)
      </div>
      <div>
        {poll?.answerTwo} ({answerTwoVotes} votes)
      </div>
      <div>
        {poll?.answerThree} ({answerThreeVotes} votes)
      </div>
      <PieChart
        data={[
          { title: poll?.answerOne, value: answerOneVotes, color: '#E38627' },
          { title: poll?.answerTwo, value: answerTwoVotes, color: '#C13C37' },
          {
            title: poll?.answerThree,
            value: answerThreeVotes,
            color: '#6A2135'
          }
        ]}
      />
    </Card>
  );
}

export default Result;
