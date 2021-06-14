import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
class Digimon extends Component {
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
                        <Button onClick={()=>this.props.addToFav(this.props.index)} >Add to fav</Button>
                    </Card.Body>
                   
                    
                </Card>
            </>
        )
    }
}

export default Digimon
