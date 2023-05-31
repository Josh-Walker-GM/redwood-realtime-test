/// api/src/subscriptions/newMessage/newMessage.ts
import gql from 'graphql-tag'

import { logger } from 'src/lib/logger'

export const schema = gql`
  type Subscription {
    newMessage(roomId: ID!): Message!
  }
`
// danny asked is this double nested?

const newMessage = {
  newMessage: {
    subscribe: (_, { roomId }, { pubSub }) => {
      logger.debug({ roomId }, 'newMessage subscription')

      return pubSub.subscribe(roomId)
    },
    resolve: (payload) => {
      logger.debug({ payload }, 'newMessage subscription resolve')

      return payload
    },
  },
}

export default newMessage
