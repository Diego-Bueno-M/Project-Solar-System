import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

const Div = styled.div`
  color: white;
  background-image: url('https://i1.wp.com/multarte.com.br/wp-content/uploads/2016/03/realistic-stars-twinkle-in-the-night-sky-loopable_vyotq2pj__f0000.png?w=1392&ssl=1');
`;

class App extends React.Component {
  render() {
    return (
      <Div>
        <Header />
        <SolarSystem />
        <Missions />
      </Div>
    );
  }
}

export default App;
