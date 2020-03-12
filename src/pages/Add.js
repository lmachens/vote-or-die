import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Add() {
  return (
    <Card>
      Add <Link to="/vote">Vote!!</Link>
    </Card>
  );
}

export default Add;
