import React, {Component} from 'react';

class ImageCard extends Component{
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state={span:0};
    }

    componentDidMount(){
        console.log(this.imageRef);
        this.imageRef.current.addEventListener('load',this.setSpan);
    }

    setSpan=()=>{
        console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({span:spans});
    }

    render(){
        const {urls,description} = this.props.image;
        return(
        <img
            style={{gridRowEnd:`span ${this.state.span}`}}
            ref={this.imageRef}
            src={urls.regular}
            alt={description}
        />
        );
    }
}

export default ImageCard;