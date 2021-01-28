import styled from 'styled-components'

import colors from '../../styles/colors'

export const Container = styled.div`
  background-color: ${colors.background_color_01};
  color: ${colors.primary_color_01};

  width: 100%;
  height: 100%;

  padding: 3rem;

  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
  }
`
export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
