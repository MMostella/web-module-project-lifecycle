import React from 'react';
import axios from 'axios';
import Followers from './Followers';

import styled from 'styled-components';

const StyledFollowers = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 3px solid lightgray;
    border-radius: 25px;
    margin: 0 5%;
`

class FollowersList extends React.Component {
    state = {
        followers: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/MMostella/followers')
            .then(res => {
                // console.log(res.data);
                this.setState({
                    followers: res.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        return (
            <StyledFollowers>
                {this.state.followers.map(user => {
                    <Followers followers={user}/>
                })}
            </StyledFollowers>
        )
    }
}

export default FollowersList;