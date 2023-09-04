import React, {Component} from 'react';

import M from './M';
class App extends Component{
constructor(){
  super()
  this.state={
    
    show:false
  }
}
toggel=()=>{
  this.setState({
    show: !this.state.show
  })
}
render(){
  const {  show } = this.state;
  return(

<div>
  <button style={{marginLeft:"50%"}} onClick ={()=>this.toggel()}>show</button>
  {show && <M/>}
</div>
  )
}
}
export default App