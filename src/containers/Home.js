import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';


export const ColorScheme = {
  primary: 'red',
  secondary: 'blue',
  third: 'purple',
  fourth: 'goldenrod'
}

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.15em;
`;

export const CenteredHeader = styled.h4`
  text-align: center;
  margin-bottom: 1.25em;
`


const ContainerDiv = styled.div`
  margin: 1% 17% 3% 17%;
  flex: 1;
  font-family: 'Open Sans', sans-serif;
`


class Home extends Component {
  render (){
    return (
      <div>
        <Header/>
        <AppDiv>
          <CenteredHeader>
            Hi! I'm Vanessa and I'm a full stack software engineer living in Manhattan.
          </CenteredHeader>
         <ContainerDiv>
            <p>
              I love risk, challenges, and new opportunities which is exaclty how I ended up in software engineering. I realized late in college my love for foreign languages correlated to my love for coding. Programming is a different world with its own language that I love to bond over with people. Oddly enough, I also love building Ikea furniture and realized that the same happiness I feel when building new things translates to my projects. It's amazing to start from nothing and have something at the end to show others!
            </p>

            <p>
              I moved from San Francisco less than a year ago and am always open to exploring the city. Any suggestions? Feel free to send them my way!
            </p>

            <p>
              I am actively seeking a new full-time opportunity as a software engineer as I continue upon the next journey in my life. Before becoming a software engineer, I worked for Deloitte as a Tech Risk Consultant serving global software vendors. I also hold a B.S. in Finance from Santa Clara University with a minor in Operations Management & Information Systems.
            </p>
          </ContainerDiv>
        </AppDiv>
      </div>
    )
  }
}

export default Home;