import React, { Component } from 'react'

// this is an example for a class based 
export class Contact extends Component {
    render() {
        return (
            <div>
                <h1>This is a contact jsx build using the class based {this.props.class_data}</h1>
            </div>
        )
    }
}

export default Contact
