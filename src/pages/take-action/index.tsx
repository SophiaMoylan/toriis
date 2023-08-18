import type { FC } from 'react'
import { scroller } from 'react-scroll'

import { TakeActionPage } from '../../types'
import {
  PrimaryNavBar,
  SecondaryNavBar,
  ToTopButton,
  Footer,
} from '../../components'
import { ContentWrapper } from '../../utils/content'
import { Letter, SignLetter, Signatories, Momentum } from '../../sections'
import type { ListEntryDocument } from '../../types'

export const getServerSideProps = async () => {
  const contentClient = new ContentWrapper()

  const takeActionEntries = await contentClient.getAllTakeActionEntries()
  const takeActionPageEntries = takeActionEntries['takeActionPage']
  const momentumEntries = takeActionEntries['continueTheMomentumEntries']

  return {
    props: {
      takeActionPageEntries,
      momentumEntries,
    },
  }
}

interface TakeActionPageProps {
  takeActionPageEntries: TakeActionPage
  momentumEntries: ListEntryDocument[]
}

const TakeActionPage: FC<TakeActionPageProps> = ({
  takeActionPageEntries,
  momentumEntries,
}) => {
  const navItems = [
    { path: 'openLetter', text: 'Open Letter' },
    { path: 'signLetter', text: 'Sign the Letter' },
    { path: 'signatories', text: 'Signatories' },
    { path: 'momentum', text: 'Continue the Momentum' },
  ]
  return (
    <>
      <PrimaryNavBar />
      <ToTopButton />
      <SecondaryNavBar navItems={navItems} />

      <div id="openLetter" className="pt-10">
        <Letter
          openLetter={takeActionPageEntries.openLetter}
          scrollToForm={() =>
            scroller.scrollTo('signLetter', {
              smooth: true,
              duration: 500,
            })
          }
        />
      </div>
      <div id="signLetter" className="pt-10">
        <SignLetter />
      </div>
      <div id="signatories" className="pt-10">
        <Signatories />
      </div>
      <div id="momentum" className="pt-10">
        <Momentum entries={momentumEntries} />
      </div>
      <Footer />
    </>
  )
}

export default TakeActionPage
