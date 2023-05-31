import type { ComponentMeta } from '@storybook/react'

import TestingPage from './TestingPage'

export const generated = () => {
  return <TestingPage />
}

export default {
  title: 'Pages/TestingPage',
  component: TestingPage,
} as ComponentMeta<typeof TestingPage>
