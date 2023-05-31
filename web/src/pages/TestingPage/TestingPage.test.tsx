import { render } from '@redwoodjs/testing/web'

import TestingPage from './TestingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TestingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TestingPage />)
    }).not.toThrow()
  })
})
