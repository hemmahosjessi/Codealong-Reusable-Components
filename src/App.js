import React from 'react'
import styled from 'styled-components/macro'
import { Card } from 'lib/Card'

const SmallCard = styled(Card)`
    width: 300px;
`

export const App = () => {
  return (
    <div>
      <SmallCard
        coverImage='https://www.fillmurray.com/500/300'
        thumbnailUrl='https://www.fillmurray.com/100/100'
        title='This is the title' 
        secondaryText='This is the secondary text'
      />

       <Card
        thumbnailUrl='https://www.fillmurray.com/100/100'
        title='This is the title' 
        secondaryText='This is the secondary text'
      />
      <Card
        title='This is the title' 
        secondaryText='This is the secondary text'
      />

      <Card>
        <h3>This is a child to the card component</h3>

      </Card>
    </div>
  )
}
