import styled, { css } from 'styled-components/macro'
import { Button } from '../../styles/Button'

const Li = styled.li`
  ${() => css`
    list-style: none;
    display: flex;
    > *:not(:last-child) {
      margin-right: 5px;
    }
    :not(:last-child) {
      margin-bottom: 5px;
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

    :disabled {
      text-decoration: line-through;
    }
  `}
`

const CheckButton = styled(Button)<{ done: boolean }>`
  ${({ done }) => css`
    position: relative;
    :after {
      content: '';
      position: absolute;
      display: ${!done ? 'block' : 'none'};
      width: 30%;
      height: 30%;
      background-color: var(--main-bg-color);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }
    :hover,
    :focus {
      :after {
        display: ${done ? 'block' : 'none'};
      }
    }
  `}
`

const DeleteButton = styled(Button)`
  :hover,
  :focus {
    color: red;
  }
`

export { Li, Input, CheckButton, DeleteButton }
