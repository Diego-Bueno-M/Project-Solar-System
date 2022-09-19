import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
`;

class Header extends React.Component {
  render() {
    return <header><Title>Sistema Solar</Title></header>;
  }
}

export default Header;
