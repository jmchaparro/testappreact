import React, { Component, Fragment } from "react";
import { Loading } from "./Loading";
import Item from "./item";
export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      prodcuts: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
        products: [
          { id: 1, name: "Xiaomi", qty: 10 },
          { id: 2, name: "Samsung", qty: 20 },
        ],
      });
    }, 1000);
  }
  render() {
    const { loading, products } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <Fragment>
        {products.map((ite, i) => {
          return <Item key={i} data={ite} />;
        })}
      </Fragment>
    );
  }
}
