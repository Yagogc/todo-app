import styled, { css } from 'styled-components/macro'

const Button = styled.button`
  ${() => css`
    font-size: 20px;

    &:hover {
      cursor: pointer;
    }
  `}
`

export { Button }
