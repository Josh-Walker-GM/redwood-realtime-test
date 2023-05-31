// api/src/lib/realtime.ts

import { createPubSub, InMemoryLiveQueryStore } from '@redwoodjs/graphql-server'

export const liveQueryStore = new InMemoryLiveQueryStore()

export type PubSubChannels = {
  newMessage: [payload: { from: string; body: string }]
}

export const pubSub = createPubSub<PubSubChannels>()
