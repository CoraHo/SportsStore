import React, {Component} from 'react';
import {CartDetailsRows} from "./CartDetailsRows";
import {Link} from "react-router-dom";

export class CartDetails extends Component {

    getLinkClasses = () => {
        return `btn btn-secondary m-1 ${this.props.cartItems === 0? "disabled" : ""}`;
    }

    render() {
        return (
            <div className="m-3">
                <h2 className="text-center">Your Cart</h2>
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Product</th>
                        <th className="text-right">Price</th>
                        <th>Subtotal</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    <CartDetailsRows cart={this.props.cart}
                                     cartPrice={this.props.cartPrice}
                                     updateQuantity={this.props.updateCartQuantity}
                                     removeFromCart={this.props.removeFromCart}/>
                    </tbody>
                </table>

                <div className="text-center">
                    <Link className="btn btn-primary m-1" to="/shop">
                        Continue Shopping
                    </Link>
                    <Link className={this.getLinkClasses()} to="/shop/checkout">
                        Checkout
                    </Link>
                </div>
            </div>
        );
    }
}
