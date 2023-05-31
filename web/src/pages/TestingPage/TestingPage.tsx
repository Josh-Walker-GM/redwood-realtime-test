import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AuctionCell from 'src/components/AuctionCell'

import VersionCell from '../../components/VersionCell'

const TestingPage = () => {
  return (
    <>
      <MetaTags title="Testing" description="Testing page" />

      <div className="flex flex-col m-4 gap-4 font-mono divide-y divide-dashed divide-gray-600">
        <div>
          <p className="text-xl font-bold">TestingPage</p>
          <p>
            Find me in <code>./web/src/pages/TestingPage/TestingPage.js</code>
          </p>
          <p>
            My default route is named <code>testing</code>, link to me with `
            <Link to={routes.testing()} className="">
              Testing
            </Link>
            `
          </p>
        </div>
        <div className="flex gap-4 pt-4">
          <p>Redwood Version:</p>
          <VersionCell />
        </div>
        <div className="flex gap-4 pt-4">
          <p className="font-bold">Let&apos;s go REALTIME!</p>
          <div>
            <AuctionCell id={'1'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TestingPage
