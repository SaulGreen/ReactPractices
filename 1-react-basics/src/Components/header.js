import React,{ Component } from 'react';

// const Header = () => {
//     return <div>Header</div>;
// }

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            keywords: ''
        }
    }
    
    inputChange(event){
        this.setState({ keywords: event.target.value });
        this.props.newsSearch(event.target.value);
    }

    render(){
        return(
            <header>
                <div className="logo"
                onClick={()=>{console.log("Clicked")}}
                >LOGO</div>
                <input onChange={ this.inputChange.bind(this) }/>
            </header>
        )
    }
}

export default Header;