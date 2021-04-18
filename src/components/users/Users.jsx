import React, { Component } from 'react'
import UserItem from "./UserItem"
import { Grid } from "semantic-ui-react";

class Users extends Component {
  render() {
    return (
      <Grid columns={4}>
        {this.props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </Grid>
    )
  }
}

export default Users
