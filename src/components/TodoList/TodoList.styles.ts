import styled, { css } from 'styled-components/macro'

const P = styled.p`
  ${() => css`
    margin: 10px 0;
    min-height: 34px;
    display: flex;
    align-items: center;
  `}
`

const Ul = styled.ul`
  ${() => css`
    margin: 0;
    padding: 10px 0;
  `}
`

export { P, Ul }
