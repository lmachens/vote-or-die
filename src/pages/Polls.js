import React from 'react';

const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  'https://my-json-server.typicode.com/lmachens/vote-or-die/polls';

function Polls() {
  const [polls, setPolls] = React.useState(null);

  React.useEffect(() => {
    alert('Mounted / First render');

    async function getPolls() {
      const response = await fetch(POLLS_API_URL);
      const polls = await response.json();
      setPolls(polls);
    }
    getPolls();
  }, []);

  return <div>Polls: {polls?.length}</div>;
}

export default Polls;
