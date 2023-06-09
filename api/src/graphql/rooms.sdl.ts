// api/src/graphql/rooms.sdl.ts

export const schema = gql`
  type Message {
    from: String
    body: String
  }

  type Query {
    room(id: ID!): [Message!]! @skipAuth
  }

  input SendMessageInput {
    roomId: ID!
    from: String!
    body: String!
  }

  type Mutation {
    send(input: SendMessageInput!): Message! @skipAuth
  }
`
