import type { FindVersionQuery, FindVersionQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindVersionQuery {
    version: redwood {
      version
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindVersionQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  version,
}: CellSuccessProps<FindVersionQuery, FindVersionQueryVariables>) => {
  return <div>{JSON.stringify(version)}</div>
}
