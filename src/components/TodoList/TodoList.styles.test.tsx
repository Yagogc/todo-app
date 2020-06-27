import React from 'react'
import { render } from '@testing-library/react'
import { P, Ul } from './TodoList.styles'

describe('P', () => {
  it('has default styles', () => {
    const { baseElement } = render(<P />)
    expect(baseElement).toMatchSnapshot()
  })
})

describe('Ul', () => {
  it('has default styles', () => {
    const { baseElement } = render(<Ul />)
    expect(baseElement).toMatchSnapshot()
  })
})
