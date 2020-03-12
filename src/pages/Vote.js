import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Vote() {
  return (
    <Card>
      Vote <Link to="/result">Result</Link>
    </Card>
  );
}

export default Vote;
