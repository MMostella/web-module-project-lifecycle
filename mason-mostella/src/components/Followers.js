import React from 'react';

import styled from 'styled-components';

const StyledFollowers = styled.div `
    border: 1px solid black;
`

class Followers extends React.Component {
    render() {
        const { followers } = this.props;
        return (
            <StyledFollowers>
                <img  src={followers.avatar_url} />
                <div>
                    <h3>{followers.login}</h3>
                    {followers}
                </div>
            </StyledFollowers>
        )
    }
}

export default Followers;