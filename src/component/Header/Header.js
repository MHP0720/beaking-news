import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

const Header = () => {
    return (
        <Jumbotron>
            <h1>BBC Fake News!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
        </p>
            <p>
                <Button variant="primary">More News</Button>
            </p>
        </Jumbotron>
    );
};

export default Header;