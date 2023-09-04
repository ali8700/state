import React, {Component} from 'react';
class M extends Component{
constructor(){
  super()
  this.state={
    personne:{
      name: 'ali',
      fullName: 'John Doe',
      bio: 'A passionate developer',
      imgSrc: "https://kokomo.fr/wp-content/uploads/2019/06/signification-couleur-fleur-1.jpg",
      profession: 'Software Engineer'
    },
   
  }
}

render(){
  return(

  <div>
    <h1>{this.state.personne.name}</h1>
    <h1>{this.state.personne.fullName}</h1>
    <h1>{this.state.personne.bio}</h1>
    <img src={this.state.personne.imgSrc}/>
    <h1>{this.state.personne.profession}</h1>
  </div>
  )
}
}
export default M