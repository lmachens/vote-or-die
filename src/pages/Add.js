import React from 'react';
import Card from '../components/Card';

function Add() {
  return (
    <Card>
      <form>
        <input type="text" placeholder="Enter question" />
        <input type="text" placeholder="First answer" />
        <input type="text" placeholder="Second answer" />
        <input type="text" placeholder="Third answer" />
        <input type="submit" value="Create Poll" />
      </form>
    </Card>
  );
}

export default Add;
