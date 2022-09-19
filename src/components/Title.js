import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  text-align:center;
  margin: 50px;
  border: 1px solid white;
  border-radius: 5px;
`;

class Title extends React.Component {
  render() {
    const { headline } = this.props;

    return (
      <Div>
        <h1>
          {headline}
        </h1>
      </Div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
