import React from 'react';
import classes from './Card.module.scss'

export default class Card extends React.Component {

    render() {
        return (
            <div className = {classes.Card}>
                <div className = {classes.imgContainer}>
                    <img src = {this.props.img} className={classes.img}/>
                </div>
                
                <div className ={classes.block}>
                    <h2 className ={classes.title}>{this.props.name}</h2>
                    <button hidden={!this.props.isNew} className = {classes.btn}>New</button>
                </div>
                <p className = {classes.description}>{this.props.description}</p>
            </div>
        )
    }
}