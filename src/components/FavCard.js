import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export class FavCard extends Component {
    render() {
        return (
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`${this.props.favData.image_url}`} />
                        <Card.Body>
                            <Card.Title>{this.props.favData.title}</Card.Title>
                            <Card.Text>
                                <br/>
                            Description :{this.props.favData.description}
                            Price :{this.props.favData.toUSD}
                            </Card.Text>
                            <Button onClick={()=>{this.props.handleDelete(this.props.favData._id)}}>Delete</Button>
                            <Button onClick={()=>{this.props.handleEdit(this.props.favData._id,
                                                                        this.props.favData.title,
                                                                        this.props.favData.description,
                                                                        this.props.favData.toUSD,
                                                                        this.props.favData.image_url)}}>Update</Button>
                        </Card.Body>
                    </Card>
                
        )
    }
}

export default FavCard
