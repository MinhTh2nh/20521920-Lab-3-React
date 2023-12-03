// RandomQuote.js
import React from "react";
import styled from "styled-components";

const QuoteWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #dcdcdc;
  border-radius: 8px;
  text-align: center;

  p {
    font-style: italic;
  }
`;

const quotes = [
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Strive not to be a success, but rather to be of value.",
  "The way to get started is to quit talking and begin doing.",
  "Don't watch the clock; do what it does. Keep going.",
];

const RandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return (
    <QuoteWrapper>
      <p>{randomQuote}</p>
    </QuoteWrapper>
  );
};

export default RandomQuote;
