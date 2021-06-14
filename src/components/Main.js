import React, { Component } from 'react'
import Axios from 'axios';
import Digimon from './Digimon';
import { CardGroup } from 'react-bootstrap';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            digimons: [],
            link:"http://localhost:3001"
        }
    }
    componentDidMount = () => {
        Axios.get(`${this.state.link}/getdigimons`).then(result => {
            this.setState({
                digimons:result.data
            })
        })
    }
    addToFav = (index) => {
        const digimon = this.state.digimons[index];
        
        const body = {
            name: digimon.name,
            level: digimon.level,
            img:digimon.img
        }
        Axios.post(`${this.state.link}/addtofav`, body);
    }
    render() {
        return (
            <>
                {
                    this.state.digimons.map((item, idx) => {
                        return <Digimon digimon={item} index={idx} addToFav={this.addToFav} key={idx}/>
                    })
                }
            </>
        )
    }
}

export default Main
