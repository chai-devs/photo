import React from 'react'
import { Typography, Container, ImageList, ImageListItem, } from '@material-ui/core'
import Images from './Images.json'
// import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      

      <Container style={{ textAlign: "center" }}>
        <Typography variant="h3" >Our Recent captuers</Typography>
        <Typography variant="h6">
          Fill the below form for any Occasions or invitation requests.
        </Typography>
      </Container>

      <Container>
        <ImageList rowHeight={170} cols={3}>
          {Images.map((imageObj) => (
            <ImageListItem cols={1}>
              <img src={imageObj.source} alt={imageObj.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      
    </>
  )
}

export default Home
