import React, {Component} from 'react';

class SearchBar extends Component
{
    state={term:""};

    onSubmitHandler(event)
    {
        event.preventDefault();//prevent the form from clearing and rerendering
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={(event)=>this.onSubmitHandler(event)}>
                    <div className="field">
                        <label>User Input</label>
                        <input
                            type="text" 
                            placeholder="Search..." 
                            value={this.state.term}
                            onChange={(e)=>this.setState({term:e.target.value})}
                         />
                    </div>
                </form>
            </div>
        )
    }
} 

export default SearchBar;