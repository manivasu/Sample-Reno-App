import React, { Component } from 'react';
export default class App extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container mt-5">
                   <form>
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <input type="submit" value="submit"/>
                   </form>
                </div>
            </div>
        );
    }
}