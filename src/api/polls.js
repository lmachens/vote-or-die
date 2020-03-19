const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  'https://my-json-server.typicode.com/lmachens/vote-or-die/polls';

export async function getPoll(pollId) {
  const response = await fetch(`${POLLS_API_URL}/${pollId}`);
  const poll = await response.json();
  return poll;
}

export async function postPoll(poll) {
  const response = await fetch(POLLS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(poll)
  });
  const createdPoll = await response.json();
  return createdPoll;
}

export async function patchPoll(pollId, poll) {
  const response = await fetch(`${POLLS_API_URL}/${pollId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(poll)
  });
  const patchedPoll = await response.json();
  return patchedPoll;
}
