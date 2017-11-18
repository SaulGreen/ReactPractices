import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import Header from './Components/header';
import JSON from './db.json';
import NewsList from './Components/news_list';


class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            news: JSON,
            filtered:JSON
        }
    }

    filterNews(keywords){
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1;
        });

        this.setState({ filtered });
        //setting filtered as single because if the names of state and variable are equals JS will know it and set it up with just the name
    }

    render(){
        return(
            <div>
                <Header newsSearch={ keywords=>this.filterNews(keywords) }/>
                <NewsList news={this.state.filtered}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"));