import React from 'react'
import styled from 'styled-components'
import { Menu } from 'antd'
// const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup

const NavButton = styled.a`
  color: white !important;
  font-weight: bold;
`
const NavMenu = styled(Menu)`
  background-color: transparent !important;
`

const LeftMenu = () => {
  return (
    <NavMenu mode="horizontal">
      <Menu.Item key="mail">
        <NavButton href="/">Home</NavButton>
      </Menu.Item>
      {/* <SubMenu title={<span>Blogs</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
      </SubMenu> */}
      <Menu.Item key="alipay">
        <NavButton href="/menus">Menu</NavButton>
      </Menu.Item>
    </NavMenu>
  )
}

export default LeftMenu
