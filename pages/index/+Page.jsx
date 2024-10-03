export { Page }

import { Button, Container } from '@mui/material'
import { Counter } from './Counter'

function Page() {
  return (
    <Container maxWidth="xl">
      <h1>RaceGuessr</h1>
      <h2>
        <Button variant="contained" color="primary" href='/play'>
          Play
        </Button>
      </h2>
    </Container>
  )
}
