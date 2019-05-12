import React  from 'react';

const ProductItem = (props) => {
    let {productName, unitPrice, productId, thumbnail} = props.product;
    return (
        <div className="ProductItem col-md-3" >
            <img src={thumbnail} alt={productName} className="img-fluid img-thumbnail"/>
            <h5 className="mt-2 text-center">{productName}</h5>
            <p className="title text-right">{unitPrice} THB</p>
            <button className="btn btn-danger btn-block" onClick={()=>{props.onAddOrder(props.product)}}>
                ซื้อ
            </button>
            <hr/>
        </div>
    );
}

export default ProductItem;