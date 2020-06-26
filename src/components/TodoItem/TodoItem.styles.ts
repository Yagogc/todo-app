import styled, { css } from 'styled-components/macro'

const Li = styled.li`
  ${() => css`
    list-style: none;
    display: flex;
    > *:not(:last-child) {
      margin-right: 5px;
    }
  `}
`

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

const Input = styled.input`
  ${() => css`
    padding: 8px;
    background-color: transparent;
    border: 1px solid var(--secondary-bg-color);
    font-size: 13px;
    width: 100%;
  `}
`

export { Li, Button, Input }
