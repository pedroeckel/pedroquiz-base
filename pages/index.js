/* eslint-disable func-names */
/* eslint-disable no-console */
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>PedroQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz do Pedro</h1>

          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();

              router.push(`quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                // eslint-disable-next-line react/jsx-no-bind
                onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Diz aí o seu nome"

              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>

          </Widget.Content>

        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quiz do Pedro</h1>

          </Widget.Header>
          <Widget.Content>
            <p> Lorem ipsum dolor sit amet...</p>

          </Widget.Content>

        </Widget>

        <Footer />

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/alura-challenges/aluraquiz-base" />
    </QuizBackground>
  );
}
