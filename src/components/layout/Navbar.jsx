import React, { Component } from 'react'
import { Menu, Sticky, Icon } from "semantic-ui-react"
import PropTypes from 'prop-types'


class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "github"
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  render() {
    return (
      <Sticky>
        <Menu color="orange" inverted>
          <Menu.Item data-cy="navbar-name">
            <Icon data-cy="nav-icon" name={this.props.icon} size="big" />
            {this.props.title}
          </Menu.Item>
        </Menu>
      </Sticky>
    )
  }
}

export default Navbar
