import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class WatchCard extends Component {
    render() {
        return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`${this.props.allData.image_url}`} />
                        <Card.Body>
                            <Card.Title>{this.props.allData.title}</Card.Title>
                            <Card.Text>
                                <br/>
                            Description :{this.props.allData.description}
                            Price :{this.props.allData.toUSD}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>{this.props.addFav(
                                this.props.allData.title,
                                this.props.allData.description,
                                this.props.allData.toUSD,
                                this.props.allData.image_url)}}>Add-To-watch-list</Button>
                        </Card.Body>
                    </Card>
        )
    }
}

export default WatchCard
