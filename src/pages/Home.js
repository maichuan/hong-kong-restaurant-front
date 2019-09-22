import React from 'react'
import coverImage from '../assets/home/cover.jpg'
import styled from 'styled-components'

const Cover = styled.div`
  position: relative;
  text-align: center;
  color: white;
`
const CoverImg = styled.img`
  width: 100%;
`
const CoverText = styled.div`
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Home = () => {
  return (
    <>
      <Cover>
        <CoverImg src={coverImage} />
        <CoverText>Welcome to Home page</CoverText>
      </Cover>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Home
