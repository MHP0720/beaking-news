import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {
    const { title, description, urlToImage, author, url} = props.article;
    return (

        <Card style={{ width: '100%' }}>
           <div className="d-flex">
           <Card.Img variant="top" src={urlToImage} style={{ height: '300px', width:'500px' }} />
            <Card.Body>
           
                <Card.Title className="text-primary">{title}</Card.Title>
                
                <Card.Text className="text-danger">
                    {author}
                </Card.Text>
                <Card.Text className="text-info">
                    {url}
                </Card.Text>

                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Know more</Button>
            </Card.Body>
           </div>
        </Card>

    );
};

export default News;