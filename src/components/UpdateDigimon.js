import React, { Component } from 'react'

class UpdateDigimon extends Component {
    render() {
        return (
            <>
                <form onSubmit={e=>this.props.updateDigimon(e)}>
                    <input type="text" onChange={this.props.updateName} value={this.props.name} placeholder="Enter the name"/>
                    <input type="text" onChange={this.props.updateImage} value={this.props.image } placeholder="Enter the image"/>
                    <input type="text" onChange={ this.props.updateLevel} value={this.props.level } placeholder="Enter the level" />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default UpdateDigimon
