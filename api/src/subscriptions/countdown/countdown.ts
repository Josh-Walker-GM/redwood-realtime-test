// api/src/subscriptions/countdown/countdown.ts

import gql from 'graphql-tag'

export const schema = gql`
  type Subscription {
    countdown(from: Int!, interval: Int!): Int!
  }
`

const countdown = {
  countdown: {
    async *subscribe(_, { from, interval }) {
      for (let i = from; i >= 0; i--) {
        await new Promise((resolve) => setTimeout(resolve, interval ?? 1000))
        yield { countdown: i }
      }
    },
  },
}

export default countdown
