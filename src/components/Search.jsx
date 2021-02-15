import React from 'react';

export default class Search extends React.Component{

    constructor(props){
        super(props);

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(e){
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(e.target.value);
    }

    render(){
        return(
            <input type="text" onChange={this.onChangeEvent} />
        );
    }
}

