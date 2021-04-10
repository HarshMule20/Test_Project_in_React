import React from 'react'

let  cssobj = {color:'blue',textAlign:'center'}
// function based component in react!
const About = ({param_data}) => {
    return (
        <div style={cssobj}>
            <h1>This is an about JSX with {param_data}</h1>
            
        </div>
    )
}

export default About
