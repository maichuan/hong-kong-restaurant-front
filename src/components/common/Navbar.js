import React, { useState, useEffect, useRef } from 'react'
import { Button, Drawer } from 'antd'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import styled from 'styled-components'

const Nav = styled.nav`
  padding: 0 20px;
  border-bottom: solid 1px #e8e8e8;
  overflow: auto;
  box-shadow: 0 0 30px #f3f1f1;
`
const Logo = styled.div`
  width: 150px;
  float: left;
  a {
    @media (max-width: 767px) {
      margin-left: -20px;
      padding: 10px 20px;
    }
    display: inline-block;
    font-size: 20px;
    padding: 19px 20px;
    text-transform: capitalize;
  }
`
const MenuCon = styled.div`
  width: calc(100% - 150px);
  float: left;
  .ant-menu-item {
    @media (max-width: 767px) {
      padding: 1px 20px;
    }
    padding: 0px 5px;
  }
  .ant-menu-submenu-title {
    @media (max-width: 767px) {
      padding: 1px 20px;
    }
    padding: 10px 20px;
  }
  .ant-menu-item a,
  .ant-menu-submenu-title a {
    padding: 10px 15px;
  }
  .ant-menu-horizontal {
    border-bottom: none;
  }
`
const NavLeft = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  float: left;
`
const NavRight = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
  float: right;
`
const BarsMenu = styled(Button)`
  @media (max-width: 767px) {
    display: inline-block;
  }
  height: 32px;
  padding: 6px;
  margin-top: 8px;
  display: none;
  background: none;
`
const BarsButton = styled.span`
  display: none;
  width: 20px;
  height: 2px;
  background: #1890ff;
  position: relative;
  margin-bottom: 0.2em;
  :after,
  :before {
    content: attr(x);
    width: 20px;
    position: absolute;
    top: -6px;
    left: 0;
    height: 2px;
    background: #1890ff;
  }
  :after {
    top: auto;
    bottom: -6px;
  }
`
const Hamburger = styled.div`
  @media (max-width: 767px) {
    display: inline-block;
    float: right;
  }
  display: none;
`

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    if (window.location.pathname === '/') {
      navRef.current.style.position = 'fixed'
      navRef.current.style.top = 0
      navRef.current.style.right = 0
      navRef.current.style.left = 0
      navRef.current.style.zIndex = 1
    } else {
      navRef.current.style.backgroundColor = 'black'
    }
  })

  return (
    <Nav ref={navRef}>
      <Logo>
        <a href="/">logo</a>
      </Logo>
      <MenuCon>
        <NavLeft>
          <LeftMenu />
        </NavLeft>
        <NavRight>
          <RightMenu />
        </NavRight>
        <Hamburger>
          <BarsMenu type="default" onClick={() => setVisible(true)}>
            <BarsButton />
          </BarsMenu>
        </Hamburger>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={true}
          onClose={() => setVisible(false)}
          visible={visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </MenuCon>
    </Nav>
  )
}

export default Navbar
