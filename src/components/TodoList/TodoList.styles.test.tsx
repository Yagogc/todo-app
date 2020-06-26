import React from 'react'
import { render } from '@testing-library/react'
import { Ul } from './TodoList.styles'

describe('ServiceTileContainer', () => {
  it('has default styles', () => {
    const { baseElement } = render(<Ul />)
    expect(baseElement).toMatchSnapshot()
  })
})
