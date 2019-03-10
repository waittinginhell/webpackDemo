import React from 'react';
import ReactDOM from 'react-dom';
import Rose from './images/11.jpg';
import './index.css';
// ReactDOM.render( <h1>Hello, world!</h1>,
// document.getElementById('root')
// );
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      reset:'yes',
    }
  }
  onClick = () => {
    this.setState({
      reset:this.state.reset === 'yes'? 'no':'yes'
    })
  }
  render(){
    return(
      <div><img src={Rose} alt='玫瑰' className={this.state.reset === 'yes'?'flower flowerRotate':'flower'} onClick = {this.onClick}/></div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById('root'))