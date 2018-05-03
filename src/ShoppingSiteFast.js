import React from 'react';
import ReactHelmet from 'react-helmet';
import ItemComponent from './ItemComponent';

class ShoppingSiteFast extends React.Component {
  constructor() {
    super();
    this.state = {
      isCheckoutMode: false,
      cart: [],
      items: [
        {
          name: 'shoe 1',
          prices: 15,
          img: '/images/optimized/1.webp',
        },
        {
          name: 'shoe 2',
          prices: 25,
          img: '/images/optimized/2.webp',
        },
        {
          name: 'shoe 3',
          prices: 35,
          img: '/images/optimized/3.webp',
        },
        {
          name: 'shoe 4',
          prices: 45,
          img: '/images/optimized/4.webp',
        },
        {
          name: 'shoe 5',
          prices: 55,
          img: '/images/optimized/5.webp',
        },
      ],
    };
  }

  addToCart() {
    return item => event => {
      console.log(1);
      const items = [].concat(this.state.cart);
      items.push(item);
      this.setState({ cart: items });
    };
  }

  buy() {
    alert('Thanks for purchase');
  }
  checkout() {
    return () => {
      this.setState({
        isCheckoutMode: true,
      });
    };
  }
  render() {
    return (
      <div>
        <ReactHelmet>
          <link href="/css/bootstrap.min.css" rel="stylesheet" />
          <title>Fast site</title>
        </ReactHelmet>
        <div
          className="row"
          style={{ display: this.state.isCheckoutMode ? 'flex' : 'none' }}
        >
          <div className="col-md-12">
            <ul className="list-group">
              {this.state.cart.map((item, id) => (
                <li className="list-group-item" key={id}>
                  Item: {item.name}, Price: {item.prices}
                </li>
              ))}
              <li className="list-group-item">
                <button onClick={this.buy}>Buy</button>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="row"
          style={{ display: this.state.isCheckoutMode ? 'none' : 'flex' }}
        >
          <div className="col-md-12">
            <div className="alert alert-success">
              My cart ({this.state.cart.length})
              <button onClick={this.checkout()}>checkout</button>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ display: this.state.isCheckoutMode ? 'none' : 'flex' }}
        >
          {this.state.items.map((item, id) => {
            return (
              <div className="col-md-4" key={id}>
                <ItemComponent
                  item={item}
                  index={id}
                  bad={false}
                  addToCart={this.addToCart()}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShoppingSiteFast;
