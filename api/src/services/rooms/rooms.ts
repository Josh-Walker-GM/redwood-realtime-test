// api/src/services/rooms/rooms.ts

import { logger } from 'src/lib/logger'

export const room = ({ id }) => [id]

// import type { PubSubChannels } from 'src/lib/realtime'
// important to be async!
export const send = async (
  { input }: { input: { roomId: string; from: string; to: string } },
  { context }: { context: { pubSub } }
) => {
  logger.debug({ input }, 'send input')

  const { roomId, ...newMessage } = input

  context.pubSub.publish(roomId, newMessage)

  return input
}
