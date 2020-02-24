import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// import { ShoppingCart } from 'styled-icons/material/ShoppingCart';

const CartStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    // background: ${props => props.theme.colors.main};
    // border: 4px solid ${props => props.theme.colors.secondaryAccent};
    margin: 2.5rem 0;
    
    @media (max-width: 850px) {
      margin: 0px;
    }
`

const ShopName = styled.h1`
  padding: 20px;
  font-family: Heebo, sans-serif;
  font-size: 2em;
  font-weight: 700;
`

const LinkStyled = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const CartSummary = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-weight: bold;

  @media (max-width: 425px) {
    font-size: 1.25rem;
  }
`

class Cart extends Component {
  state = {
    items: 0,
  }

  updateItemTotal = qty => {
    this.setState({ items: qty })
  }

  componentDidMount() {
    if (window.Snipcart) {
      //this allows it to work when switching pages
      var count = window.Snipcart.api.items.count()
      this.updateItemTotal(count)

      //this allows it to work when you add or change items
      window.Snipcart.subscribe("cart.closed", () => {
        var count = window.Snipcart.api.items.count()
        this.updateItemTotal(count)
      })

      //this allows it to work on refreshing the page
      window.Snipcart.subscribe("cart.ready", data => {
        var count = window.Snipcart.api.items.count()
        this.updateItemTotal(count)
      })
    }
  }

  componentWillUnmount() {
    window.Snipcart.unsubscribe("cart.closed")
    window.Snipcart.unsubscribe("cart.ready")
  }

  render() {
    return (
      <CartStyled>
        {/* <ShopName>
          <LinkStyled to="/">{this.props.shopName}</LinkStyled>
        </ShopName> */}
        <CartSummary className="snipcart-summary">
          <a href="#" className="snipcart-checkout">
            CART
            {/* No cart icon */}
            {/* <ShoppingCart size='40px' /> */}
          </a>
          <div>({this.state.items})</div>
        </CartSummary>
      </CartStyled>
    )
  }
}

export default Cart
