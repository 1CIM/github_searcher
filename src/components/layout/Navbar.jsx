import React from "react";
import { Menu, Sticky, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <Sticky>
      <Menu color="orange" inverted>
        <Menu.Item data-cy="navbar-name">
          <Icon data-cy="nav-icon" name={icon} size="big" />
          {title}
        </Menu.Item>
      </Menu>
    </Sticky>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
