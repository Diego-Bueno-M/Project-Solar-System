import React from 'react';
import styled from 'styled-components';
// import Missions from "./Missions";
import PropTypes from 'prop-types';

const Div = styled.div`
  border: 1px solid white;
  margin: 10px;
  height: 180px;
  width: 250px;
  border-radius: 5px;
`;

const Title = styled.h3`
  border-bottom: 1px solid white;
  padding-bottom: 15px;
`;

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <Div data-testid="mission-card">
        <Title data-testid="mission-name">{name}</Title>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </Div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
