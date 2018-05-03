import React from 'react';

class ItemComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      imageLoad: false,
      shouldRender: false,
    };
  }
  componentDidMount() {
    const time = this.props.bad ? 10000 : 500;
    setInterval(() => {
      this.setState({
        shouldRender: true,
      });
      setInterval(
        () => {
          this.setState({
            imageLoad: true,
          });
        },
        1000,
        this.props.index
      );
    }, time * this.props.index);
  }

  renderItem(item) {
    return (
      <div>
        {this.state.imageLoad ? (
          <img src={item.img} width="250px" height="250px" />
        ) : (
          <div>Loading Product image</div>
        )}
        <br />
        Name: {item.name}
        <br />
        Cost: {item.prices}$
        <br />
        <button onClick={this.props.addToCart(item)}>Add To Cart</button>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.state.shouldRender ? (
          this.renderItem(this.props.item)
        ) : (
          <div>Product is loading...</div>
        )}
      </div>
    );
  }
}

export default ItemComponent;
