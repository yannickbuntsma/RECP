import * as React from 'react'
import styled from '@emotion/styled'

import { useTheme } from '../../theme/theme'

export interface Props {}

const LoadingScreen: React.FC<Props> = () => {
  const theme = useTheme()

  return (
    <Screen>
      <Loader color={theme.colors.primary}>
        <span />
        <span />
        <span />
      </Loader>
    </Screen>
  )
}

export default LoadingScreen

const Screen = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Loader = styled.div`
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${({ color }) => color};
    margin: 35px 5px;
  }

  span:nth-child(1) {
    animation: bounce 1s ease-in-out infinite;
  }

  span:nth-child(2) {
    animation: bounce 1s ease-in-out 0.2s infinite;
  }

  span:nth-child(3) {
    animation: bounce 1s ease-in-out 0.4s infinite;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }

    25% {
      transform: translateY(-20px);
    }
  }
`
