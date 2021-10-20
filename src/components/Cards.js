import React from 'react'
import './Cards.css'

class Cards extends React.Component{

  render(){
    const classess = 'cards '+this.props.className;
    return <div className={classess}>{this.props.children}</div>
  }
}

export default Cards;