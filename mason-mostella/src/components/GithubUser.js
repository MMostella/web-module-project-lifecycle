import React from 'react';
import FollowersList from './FollowersList';

import styled from 'styled-components';

const StyledUser = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 3px solid lightgray;
    border-radius: 25px;
    margin: 0 5%;

    .user-container {
        display: flex;
        align-items: center;
        /* width: 80%; */
        margin: 1%;
    }

    h1 {
        font-size: 3.5rem;
        margin: 0;
    }

    .img-container img {
        border: 1px solid black;
        border-radius: 15px;
        width: 50%;
    }

    .personal-info {
        width: 75%;
        margin-right: 5%;
    }
    
    .personal-info p {
        display: flex;
        justify-content: flex-start;
        font-weight: bold;
    }
`

class GithubUser extends React.Component {
    render() {
        const { user } = this.props;

        return (
            <>
                <StyledUser>
                    <h1>Mason Mostella</h1>
                    <div className='user-container'>
                        <div className='img-container'>
                            <img src={user.avatar_url} alt=''/>
                        </div>
                        <div className='personal-info'>
                            <p>{`Bio: ${user.bio}`}</p>
                            <p>{`GitHub: ${user.html_url}`}</p>
                            <p>{`Followers: ${user.followers}`}</p>
                            <p>{`Following: ${user.following}`}</p>
                        </div>
                    </div>
                </StyledUser>
                <FollowersList />
            </>
        )
    }
}

export default GithubUser;