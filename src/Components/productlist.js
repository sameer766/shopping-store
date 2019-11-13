import React,{Component} from 'react';
import Product from './product';
import Title from './title';
import {ProductConsumer} from "../context";

export default class Productlist extends Component
{

render()
{
 return(
  <React.Fragment>
  <div className="py-5">
  <div className="container">
  <Title name="our" title="Products" />
   <div className="row">
   <ProductConsumer>
   {hello=> {
    return hello.products.map(products=>{
      return <Product key="{product.id}" products={products} />;
    });
   }
   }
   </ProductConsumer>
  </div>
  </div>
  </div>
  </React.Fragment>
// <Product />
)
}
}
