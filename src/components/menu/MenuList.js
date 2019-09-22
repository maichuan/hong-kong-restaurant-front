import React, { useState, useEffect } from 'react'
import MenuCard from './MenuCard'
import { Row, Col } from 'antd'
import styled from 'styled-components'

import { mockMenu } from './Mock'

const Column = styled(Col).attrs({
  sm: 12,
  md: 6,
})`
  margin: 5px 0px;
`

const MenuList = () => {
  const [menus, setMenus] = useState([])

  useEffect(() => {
    setMenus(mockMenu)
  }, [])

  return (
    <Row>
      {menus.map((menu, key) => (
        <Column key={key}>
          <MenuCard menu={menu} />
        </Column>
      ))}
    </Row>
  )
}

export default MenuList
