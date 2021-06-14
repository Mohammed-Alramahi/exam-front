import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
class FavDigimon extends Component {
    render() {
        return (
            <>
                <Card>
                    <Card.Body>
                    <img src={this.props.digimon.img}/>
                        <Card.Text>
                            {this.props.digimon.name}<br />
                            {this.props.digimon.level}<br />
                        </Card.Text>
                        <Button onClick={() => this.props.setShow(this.props.index)} >Edit</Button>
                        <Button onClick={() =>this.props.deleteDigimon(this.props.digimon._id)} >Delete</Button>
                    </Card.Body>
                   
                    
                </Card>
            </>
        )
    }
}

export default FavDigimon
