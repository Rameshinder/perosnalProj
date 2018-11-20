import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../icon/index'
import AppConstant from '../../../common/utils/constant'
import Util from '../../../common/utils/util'
import logo from './anz-logo.svg'
import { HeaderWrapper, Logo, HeaderRow, LogoutButton, Link, LinkWrapper, LinkContainer,
  LinkInnerWrapper, MailLinkContainer, LogoutText, ContextMenuButton,
  LinkText, ContextMenu, MenuListItem, MenuListItemLink, IconMore } from './styles'

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      'open': false,
      'mousedown': false,
      'clickedMenuItem': true
    }
    this.openMenu = this.openMenu.bind(this)
    this.handleExternalClick = this.handleExternalClick.bind(this)
    this.handleMenuInternalClick = this.handleMenuInternalClick.bind(this)
  }

  openMenu () {
    this.setState({open: true})
  }

  handleExternalClick () {
    const status = {}
    if (this.state.open && !this.state.mousedown && !this.state.clickedMenuItem) {
      status.open = !this.state.open
    } else {
      if (this.state.mousedown) {
        status.mousedown = false
      } else {
        void (0)
      }
    }

    this.setState({
      ...status
    })
    this.handleMenuInternalClick()
  }

  handleMenuInternalClick () {
    this.setState({
      clickedMenuItem: true
    })
    setTimeout(() => {
      this.setState({
        clickedMenuItem: false,
        open: false
      })
    }, 200)
  }

  componentDidMount () {
    document.addEventListener('mouseup', this.handleExternalClick)
    // var icon = document.getElementById('contextMenuButton')
    // icon ? icon.addEventListener('mousedown', this.handleMouseDown) : void (0)
  }

  componentDidUpdate () {
    var contextMenu = document.getElementById('contextMenu')
    console.log(contextMenu)
    // contextMenu ? contextMenu.addEventListener('mousedown', this.handleMenuInternalClick) : void (0)
  }

  render () {
    const { open } = this.state
    return (
      <HeaderWrapper data-test-id='Header'>
        <HeaderRow>
          {
            <Logo data-test-id='header-logo' alt='ANZ Logo' src={logo} />
          }
          <LinkWrapper data-test-id='Wrapper_Link'>
            <LinkInnerWrapper>
              <LinkContainer>
                <div>
                  <Link data-test-id='Link_Whats_New' href='https://www.anz.com.au/promo/personal/ways-bank/better-internet-banking/updates/' target='https://www.anz.com.au/promo/personal/ways-bank/better-internet-banking/updates/' tabindex='0'>
                    <Icon iconName='Alert Notification' color='white' /><div>What's new</div>
                  </Link>
                </div>
              </LinkContainer>
              <LinkContainer>
                <div>
                  <Link data-test-id='Link_Contact' href={AppConstant.IB_URL_CONTACTUS} target={AppConstant.IB_URL_CONTACTUS} tabindex='0'>
                    <Icon iconName='Chat' color='white' /><div>Contact</div>
                  </Link>
                </div>
              </LinkContainer>
              <MailLinkContainer>
                <div>
                  <Link data-test-id='Link_Mail' href={AppConstant.IB_URL_MAIL} target={AppConstant.IB_URL_MAIL} tabindex='0'>
                    <Icon iconName='Email' color='white' /><div>Mail</div>
                  </Link>
                </div>
              </MailLinkContainer>
            </LinkInnerWrapper>
            <LogoutButton tabindex='0' data-test-id='Button_Logout' onClick={Util.handleLogOut}>
              <Icon iconName='Login Security' color='white' />
              <LogoutText>Log out</LogoutText>
            </LogoutButton>
          </LinkWrapper>
          <ContextMenuButton tabindex='0' id='contextMenuButton' data-test-id='Button_Context_Menu' onClick={() => this.openMenu()}>
            <IconMore>...</IconMore>
          </ContextMenuButton>
          {
            open
              ? <ContextMenu id='contextMenu' data-test-id='Context_Menu' onClick={() => this.handleExternalClick()}>
                <MenuListItemLink tabindex='0' href={AppConstant.IB_URL_CONTACTUS} target={AppConstant.IB_URL_CONTACTUS}>
                  <MenuListItem>
                    <Icon iconName='Chat' />
                    <LinkText data-test-id='Link_Contact'>Contact</LinkText>
                  </MenuListItem>
                </MenuListItemLink>
                <MenuListItemLink tabindex='0' href={AppConstant.IB_URL_MAIL} target={AppConstant.IB_URL_MAIL}>
                  <MenuListItem>
                    <Icon iconName='Email' />
                    <LinkText data-test-id='Link_Mail'>Mail</LinkText>
                  </MenuListItem>
                </MenuListItemLink>
                <MenuListItemLink tabindex='0' href='hhttps://www.anz.com.au/promo/personal/ways-bank/better-internet-banking/updates/' target='https://www.anz.com.au/promo/personal/ways-bank/better-internet-banking/updates/'>
                  <MenuListItem>
                    <Icon iconName='Alert Notification' />
                    <LinkText data-test-id='Link_Whats_New'>What's new</LinkText>
                  </MenuListItem>
                </MenuListItemLink>
                <MenuListItemLink tabindex='0'>
                  <MenuListItem>
                    <Icon iconName='Wealth' />
                    <LinkText data-test-id='Link_Join_Share_Investing'>JOIN ANZ SHARE INVESTING</LinkText>
                  </MenuListItem>
                </MenuListItemLink>
                <MenuListItemLink tabindex='0' onClick={Util.handleLogOut}>
                  <MenuListItem>
                    <Icon iconName='Login Security' />
                    <LinkText data-test-id='Link_Logout'>Log out</LinkText>
                  </MenuListItem>
                </MenuListItemLink>
              </ContextMenu>
              : void (0)
          }
        </HeaderRow>
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  link: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_parent', '_self', '_top'])
}

export default Header
