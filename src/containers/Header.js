import React, { Component } from 'react';
import styled from 'styled-components'


const HeaderDiv = styled.div`
padding-top: 5vh;
text-align: center;
font-family: 'Zilla Slab Highlight', sans-serif;
color: blue;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 16px;
`


class Header extends Component {
  render(){
    return (
      <HeaderDiv>
      Hi I'm Vanessa!
      <div>
      </div>
      </HeaderDiv>
    )
  }
}

export default Header;