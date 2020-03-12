import React from 'react';
import Card from '../components/Card';
import './Add.css';
import Button from '../components/Button';

function Add() {
  return (
    <Card>
      <form className="add-form">
        <input
          className="add-form__input add-form__input-question"
          type="text"
          placeholder="Enter question"
        />
        <input
          className="add-form__input add-form__input-answer"
          type="text"
          placeholder="First answer"
        />
        <input
          className="add-form__input add-form__input-answer"
          type="text"
          placeholder="Second answer"
        />
        <input
          className="add-form__input add-form__input-answer"
          type="text"
          placeholder="Third answer"
        />
        <Button>Create Poll</Button>
      </form>
    </Card>
  );
}

export default Add;
