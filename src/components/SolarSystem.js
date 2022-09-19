import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align:center;
  flex-wrap: wrap;
`;

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <Div>
          {planets.map((planet, index) => (<PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            key={ index }
          />))}
        </Div>
      </div>
    );
  }
}

export default SolarSystem;
