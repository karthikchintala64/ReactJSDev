import React from 'react';
import { Link } from 'react-router';

const Products = React.createClass({
    render() {
        return (
            <div>
                <h1 class="page-header">
                    Products
                </h1>
                <a onClick={this.props.addProduct.bind(null,'hello')}>Add New Product</a>
                <ul class="heroes">
                    {this.props.products.map((product, i) =>
                        <li key={product.id}>
                            <Link to={'/product/' + product.id} >
                                <span class="badge">{product.id}</span> {product.name}
                            </Link>
                            <button type="button" class="close" aria-label="Close" onClick={this.props.removeProduct.bind(null,i)}>
                                <span aria-hidden="true">&times; </span>
                            </button>
                        </li>
                    ) }
                </ul>
            </div>
        );
    }
});
export default Products;