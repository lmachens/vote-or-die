// Unused
import React from 'react';

const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  'https://my-json-server.typicode.com/lmachens/vote-or-die/polls';

class Polls extends React.Component {
  state = {
    polls: null
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     polls: null
  //   }
  // }

  async getPolls() {
    const response = await fetch(POLLS_API_URL);
    const polls = await response.json();

    this.setState({
      polls
    });
  }

  componentDidMount() {
    alert('Mounted / First render');
    this.getPolls();
  }

  render() {
    return <div>Polls</div>;
  }
}

export default Polls;
