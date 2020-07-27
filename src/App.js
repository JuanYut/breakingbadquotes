import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Quote from "./components/Quote";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #093b35 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [quote, setQuote] = useState({});

  // * Only Fetch
  const callAPI = () => {
    const api = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const quote = api.then((respond) => respond.json());
    quote.then((result) => console.log(result));
  };

  // * Async Await
  const callAsyncAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const quoteApi = await api.json();
    setQuote(quoteApi[0]);
    console.log();
  };

  useEffect(() => {
    callAsyncAPI();
  }, []);

  return (
    <Container>
      <Quote text={quote} />
      <Button onClick={callAsyncAPI}>Obtener Frase</Button>
    </Container>
  );
}

export default App;
