import React from 'react';

const ProductDetails = React.createClass({
    render(){
        const {productid} = this.props.params;

        const i=this.props.products.findIndex((prod)=>prod.id==productid)
        
        const selectedProduct=this.props.products[i]; 

        return(
            <div>
                <h1 class="page-header">Product Details</h1>
                <h2>ID: {selectedProduct.id}</h2>
                <h2>Name: {selectedProduct.name}</h2>
            </div>
        );
    }
});

export default ProductDetails;