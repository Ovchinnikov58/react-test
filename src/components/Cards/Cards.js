import React from 'react';
import classes from './Cards.module.scss'
import Card from './Card/Card'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default class Cards extends React.Component {
    state = {
        userData: null,
        cards: null,
        isLoaded: false
    }

    loadPage = async () => {
        try {
            let response = await fetch('http://dev-test-black.ru/testTask/data.json');
            const page = await response.json();
            if (page) {
                this.setState({
                    userData: page.userData,
                    cards: page.cards,
                    isLoaded: true
                })
                 console.log(this.state);
            }
        }
        catch(e) {
            console.log(e)
        }

    }

    componentDidMount() {
        this.loadPage()
    }

    render() {
        const { userData, cards, isLoaded } = this.state; 

        return (
            <div className={classes.Cards}>
                { 
                isLoaded  
                    ? 
                        (
                            <Header name={userData.name}/>
                        )
                    : null
                }

                { 
                isLoaded  
                    ? cards.map((card, index) => {
                        return (
                            <Card 
                                key = {index}
                                name = {card.name}
                                description = {card.description}
                                img = {card.img}
                                isNew = {card.isNew}
                            />
                        )
                    }) 
                    : null
               }
               <Footer />
            </div>
        )
    }
}