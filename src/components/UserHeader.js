import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component{
  componentDidMount(){
    this.props.fetchUser(this.props.userId);
  }
  render(){
    const {user} = this.props;
    if(!user){
      return null;
    }
    return <h4><b>{user.name}</b></h4>
  }
}

const mapStateToProps =(state,ownProps)=> {
  const user = state.users.find(user=> user.id === ownProps.userId);
  return {user};
}

export default connect(mapStateToProps, {fetchUser})(UserHeader);