export { Page }

import './styles.css'

import { Autocomplete, Button, Container, TextField } from '@mui/material'
import { reload } from 'vike/client/router'
import countries from '../../../utils/countries'

import { useData } from '../../../renderer/useData'
import { useEffect, useState } from 'react'

function Page() {

  const { pics, country } = useData()

  useEffect(() => {
    console.log(pics)
  }, [pics])

  const [guess, setGuess] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
    console.log(guess)
    if (guess === country) {
      console.log('Correct!')
      alert('Correct!')
    } else {
      alert('Incorrect!')
    }
    reload()
  }  

  return (
    <Container maxWidth="xl">
      <h1>RaceGuessr!</h1>
      <img src={pics[0].properties.url} 
        style={{ width: 'auto', height: '500px' }} 
        alt={pics[0].properties.title}
      />
      <Autocomplete
        value={guess} 
        inputValue={inputValue}
        onChange={(event, newValue) => {
          setGuess(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={countries.map((country) => country.name)}
        renderInput={(params) => <TextField {...params} label="Country" className='guessInput' />}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Guess
      </Button>
          
    </Container>
  )
}
