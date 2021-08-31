import React from 'react';
// import axios from 'axios';

import styled from 'styled-components';

const StyledUser = styled.div `
    border: 1px solid black;
    padding: 5%;

    .img-container img {
        width: 50%;
    }
`

class GithubUser extends React.Component {
    render() {
        const { user } = this.props;

        return (
            <StyledUser>
                <div className='img-container'>
                    <img src={user.avatar_url} alt=''/>
                </div>
                <h1>Mason Mostella</h1>
                <div className='personal-info'>
                    {`Bio: ${user.bio}`}
                    {`GitHub: ${user.html_url}`}
                    {`Followers: ${user.followers}`}
                    {`Following: ${user.following}`}
                </div>

            </StyledUser>
        )
    }
}

export default GithubUser;