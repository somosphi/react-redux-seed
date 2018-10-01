import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import styled from 'styled-components';
import withCounter from '../../containers/Counter';
import logo from '../../images/logo-portal.svg';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #4fa444;
  padding: 20px;
  color: white;
`;

const Image = styled.img`
  height: 80px;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Text = styled.p`
  font-size: 1.1em;
`;

const Button = styled.button`
  background-color: #4fa444;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Text} {
    padding: 0px 10px;
  }
`;

const Home = ({ counter, sum, subtract }) => {
  const sumValue = () => sum(1);
  const subtractValue = () => subtract(1);

  return (
    <Container>
      <Header>
        <Image src={logo} alt="logo" />
        <Title>4all Front-End Web Seed</Title>
      </Header>
      <Text>
        Esse seed tem como objetivo apenas prover a estrutura inicial do projeto
         junto com os principais pacotes utilizados.
      </Text>
      <CounterContainer>
        <Button onClick={sumValue}>Incrementar</Button>
        <Text>{counter}</Text>
        <Button onClick={subtractValue}>Decrementar</Button>
      </CounterContainer>
    </Container>
  );
};

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  sum: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
};

export default withCounter(Home);
