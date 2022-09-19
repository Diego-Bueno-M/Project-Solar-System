import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align:center;
  flex-wrap: wrap;
`;

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <Div>
          {missions.map((mission, index) => (<MissionCard
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
            key={ index }
          />))}
        </Div>
      </div>
    );
  }
}

export default Missions;
