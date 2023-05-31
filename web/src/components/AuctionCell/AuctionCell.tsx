// auction cell

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query LiveAuctionQuery($id: ID!) @live {
    auction(id: $id) {
      bids {
        amount
      }
      id
      title
      highestBid {
        amount
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {JSON.stringify(error)}</div>
)

export const Success = ({ auction }: CellSuccessProps) => {
  return <div>{JSON.stringify(auction)}</div>
}
