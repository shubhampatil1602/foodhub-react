import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Shubbi',
        location: 'Bharat',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/shubhampatil1602');
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className='user-card'>
        <img
          src={avatar_url}
          alt={name}
          style={{ borderRadius: '50%', height: '300px' }}
        />
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: @shubhamsp1602</h3>
      </div>
    );
  }
}

export default UserClass;
