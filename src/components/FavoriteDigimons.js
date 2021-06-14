import React, { Component } from 'react'
import Axios from 'axios';
import FavDigimon from './FavDigimon';
import UpdateDigimon from './UpdateDigimon';
class FavoriteDigimons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            digimons: [],
            link: "http://localhost:3001",
            chosen: {},
            updatedName: '',
            updatedImage: '',
            updatedLevel: '',
            showForm: false,
            id:0
        }
    }
    componentDidMount = () => {
        Axios.get(`${this.state.link}/getfavorite`).then(result => {
            this.setState({
                digimons: result.data
            })
        })
    }
    deleteDigimon = (id) => {
        Axios.delete(`${this.state.link}/deletefavorite/${id}`).then(result => {
            this.setState({
                digimons: result.data
            })
        })
    }
    updateName = (e) => {
        this.setState({
            updatedName:e.target.value
        })
    }
    updateImage = (e) => {
        this.setState({
            updatedImage:e.target.value
        })
    }
    updateLevel = (e) => {
        this.setState({
            updatedLevel:e.target.value
        })
    }
    setShow = (index) => {
        const digimon = this.state.digimons[index];
        this.setState({
            showForm: true,
            updatedName: digimon.name,
            updatedImage: digimon.img,
            updatedLevel: digimon.level,
            chosen:digimon
        })
    }
    updateDigimon = (e) => {
        e.preventDefault();
        const id = this.state.chosen._id;
        const body = {
            name: this.state.updatedName,
            img: this.state.updatedImage,
            level:this.state.updatedLevel,
        }
        Axios.put(`${this.state.link}/updatefavorite/${id}`, body).then(result => {
            this.setState({
                digimons: result.data
            })
        })
    }
    render() {
        return (
            <>
              {this.state.showForm && <UpdateDigimon updateLevel={this.updateLevel} updateName={this.updateName}
                    updateImage={this.updateImage} updateDigimon={this.updateDigimon} name={this.state.updatedName} image={this.state.updatedImage} level={this.state.updatedLevel}/>

                }
                {
                    this.state.digimons.map((item, idx) => {
                        return <FavDigimon deleteDigimon={this.deleteDigimon} setShow={this.setShow} digimon={item} key={idx} index={idx} />
                })}
              
            </>
        )
    }
}

export default FavoriteDigimons
