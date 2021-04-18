import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import PropTypes from "prop-types"

const UserItem = ({user: {login, avatar_url, html_url}}) => {
  return (
    <Card data-cy="user-card">
      <Image data-cy="user-img" src={avatar_url} circular size="medium" />
      <Card.Content>
        <Card.Header data-cy="user-login" as="h3">{login}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Button data-cy="user-btn" href={html_url}>More</Button>
      </Card.Content>
    </Card>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem;
