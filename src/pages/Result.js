import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import PieChart from 'react-minimal-pie-chart';
import { getPoll } from '../api/polls';
import Loading from '../components/Loading';

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);

  React.useEffect(() => {
    async function doGetPoll() {
      try {
        setIsLoading(true);
        const poll = await getPoll(pollId);
        setPoll(poll);
        setIsLoading(false);
      } catch (error) {
        // console.error('Received error', error.message);
        setErrorMessage(error.message);
      }
    }
    doGetPoll();
    // getPoll(pollId).then(poll => setPoll(poll));
  }, [pollId]);

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
