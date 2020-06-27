import styled, { css } from 'styled-components/macro'
import { Button as OriginalButton } from '../../styles/Button'

const Button = styled(OriginalButton)`
  ${() => css`
    font-size: 20px;
    display: flex;
    align-items: center;

    > *:not(:last-child) {
      margin-right: 5px;
    }

    :hover {
      cursor: pointer;
    }
  `}
`

export { Button }
