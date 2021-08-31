import React from 'react';
import axios from 'axios';
import GithubUser from './GithubUser';

import styled from 'styled-components';

const StyledCard = styled.div `
`

class GithubCard extends React.Component {
    state = {
        user: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/MMostella')
            .then(res => {
                console.log(res)
                this.setState({
                    user: res.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        return (
            <StyledCard>
                < GithubUser user={this.state.user}/>
            </StyledCard>
        )
    }
}

export default GithubCard;
