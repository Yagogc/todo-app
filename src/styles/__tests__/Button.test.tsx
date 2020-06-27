import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '../Button'

describe('Button', () => {
  it('has default styles', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer', {
      modifier: ':hover',
    })
  })
})
