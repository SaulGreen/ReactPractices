import React,{ Component } from 'react';

class LifeCycle extends Component{
    // 1- GET DEFAULT STATE
    constructor(props){
        super(props);

        //2- SET INITIAL STATE
        this.state = {
            title: 'Pulp finction in cinemas',
            body: 'dummy text'
        }
    }

    componentWillReceiveProps(){
        console.log("BEFORE RECEICING PROPS");
    }

    // 3- BEFORE GETS CREATED
    componentWillMount(){
        //console.log('Before component gets created');
        //document.querySelector('h4').style.color = 'red';
        
    }

    componentWillUpdate(){
        console.log("Before gets updated")
    }
    componentDidUpdate(){
        console.log("After update");
    }

    shouldComponentUpdate(nextProps,nextState){
        // console.log(this.state.title)
        // console.log(nextState.title)
        //return false;
        if(nextState.title === "something else"){
            return false;
        }
        return true;
    }

    // 4- RENDER JSX
    render(){
        return(
            <div>
                <h4>{this.state.title}</h4>
                <br/>
                <div>{this.state.body}</div>
                <div onClick={()=> this.setState({title:'something els'})}>Click to change</div>
            </div>
        )
    }

    // 5- AFTER A COMPONENT IS MOUNTED

    componentDidMount(){
        console.log("After component is mounted");
        document.querySelector('h4').style.color = 'red';
    }

    componentWillUnmount(){
        console.log("UNMOUNT")
    }


}

export default LifeCycle;