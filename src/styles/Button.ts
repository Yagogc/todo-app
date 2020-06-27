import styled, { css } from 'styled-components/macro'

const Button = styled.button`
  ${() => css`
    padding: 8px;
    background-color: transparent;
    border: 1px solid var(--secondary-bg-color);

    &:hover {
      cursor: pointer;
    }
  `}
`

export { Button }
