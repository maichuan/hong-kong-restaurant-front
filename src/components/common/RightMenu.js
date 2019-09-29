import React from 'react'
import styled from 'styled-components'
import { Menu } from 'antd'

const NavButton = styled.a`
  color: white !important;
  font-weight: bold;
`
const NavMenu = styled(Menu)`
  background-color: transparent !important;
`

const RightMenu = () => {
  return (
    <NavMenu mode="horizontal">
      <Menu.Item key="mail">
        <NavButton href="/">Signin</NavButton>
      </Menu.Item>
      <Menu.Item key="app">
        <NavButton href="/">Signup</NavButton>
      </Menu.Item>
    </NavMenu>
  )
}

export default RightMenu
