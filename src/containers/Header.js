import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderDiv = styled.div`
padding-top: 5vh;
text-align: center;
font-family: 'Zilla Slab Highlight', sans-serif;
color: blue;
`;

const ProfileTitle = styled.h1`
  color: black;
`

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
        <Link to="/">
         <ProfileTitle>VANESSA JIMÉNEZ</ProfileTitle>
        </Link>

      <div>
        <NavLink to='/'>ABOUT</NavLink>
        <NavLink to='/code'>CODE</NavLink>
        <NavLink to='/life'>LIFE</NavLink>
        <NavLink to='/life'>RÈSUMÈ</NavLink>
        <NavLink to='/contact'>CONTACT</NavLink>
      </div>
      <hr/>
      </HeaderDiv>
    );
  }
}

export default Header;