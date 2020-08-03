import React from 'react';
import '../styles/home.scss'

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="home-container">
                <h1>Where beginners find the advanced to learn any skill</h1>
                <input
                    placeholder="Email" 
                />
                <button>Begin</button>
            </div>
        )
    }
}