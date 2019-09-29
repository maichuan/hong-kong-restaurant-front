import React, { useState } from 'react'
import { Card as AntDCard, Badge, Button } from 'antd'
import styled from 'styled-components'

const MetaCard = AntDCard.Meta
const Card = styled(AntDCard)`
  width: 90%;
  margin: auto !important;
`
const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 250px;
`
const Price = styled(Badge)`
  position: absolute;
  bottom: 10px;
  right: -30%;
`
const Img = styled.img`
  width: 100%;
  height: 250px;
`
const AddToCart = styled(Button)`
  z-index: 0;
  :hover {
    color: green !important;
    border-color: green !important;
  }
`

const Image = ({ image, price }) => {
  return (
    <ImageContainer>
      <Img alt="file not found" src={image} />
      <Price overflowCount={100000} count={price + '.-'} />
    </ImageContainer>
  )
}
const MenuCard = ({ menu }) => {
  const [cardHover, setCardHover] = useState(false)
  return (
    <Card
      hoverable
      onMouseOver={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
      cover={<Image image={menu.image} price={menu.price} />}
    >
      {cardHover ? (
        <AddToCart type="dashed" shape="round" icon="plus-circle">
          Add To Cart
        </AddToCart>
      ) : (
        <MetaCard title={menu.title} description={menu.description} />
      )}
    </Card>
  )
}

export default MenuCard
