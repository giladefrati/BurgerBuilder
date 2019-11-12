import React, {Component} from 'react';
import Aux from '../../hoc/ReactAux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const PRICES = {
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
    salad: 0.5,
    avocado: 0.7,
    spicySauce: 0.5
}  

class BurgerBuilder extends Component{
    state = {
        ingredients: null,
        totalPrice: 4.00,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount(){
        axios.get('https://bbb-udemy.firebaseio.com/ingredients.json')
        .then(response =>{
            this.setState({ingredients : response.data})
        })
        .catch(error => {this.setState({error:true})});
    }

    purchasingHandler = () => {
        this.setState({purchasing: true});
    }
    cancelPurchasingHandler = () => {
        this.setState({purchasing: false});
    }

    addIngredientHandler = type => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const newTotalPrice = this.state.totalPrice + PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newTotalPrice,
        });
    }

    purchaseContinueHandler = () => {
        // alert('YAY!');
        this.setState({loading:true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer:{
                name:'Gilad Efrati',
                address:{
                    street: 'Dr Shor',
                    City: ' Tel-Aviv',
                    Country: 'Israel'
                },
                email: 'gilad@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json',order)
        .then(response => {
            this.setState({loading:false, purchasing:false});
        })
        .catch(error => {
            this.setState({loading:false, purchasing:false});

        });
    }

    removeIngredientHandler = type => {
        const updatedCount = this.state.ingredients[type] - 1;
        if(updatedCount <= -1) return;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const newTotalPrice = this.state.totalPrice - PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newTotalPrice,
        });
    }
    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let k in disabledInfo){
            disabledInfo[k] = disabledInfo[k] <= 0; 
        }
        let orderSummary = null;
        let burgerContainer = this.state.error? <p>There's a problem Captain</p> : <Spinner/>
        if(this.state.ingredients){
            burgerContainer = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    totalPrice = {this.state.totalPrice}
                    purchasable={this.state.totalPrice > 4}
                    purchased={this.purchasingHandler}
                    />
                </Aux>
            )
            orderSummary = (
                <OrderSummary 
                ingredients={this.state.ingredients} 
                totalPrice = {this.state.totalPrice}
                purchaseContinue={this.purchaseContinueHandler}
                purchaseCancel={this.cancelPurchasingHandler}/>
        );
        }
        if( this.state.loading ) orderSummary = <Spinner/>;

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.cancelPurchasingHandler}>
                    {orderSummary}
                </Modal>
                {burgerContainer}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);