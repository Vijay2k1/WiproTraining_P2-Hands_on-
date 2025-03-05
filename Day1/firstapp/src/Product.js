import {Component} from "react"
import Category from "./Category";

class Product extends Component{
    render(){
        return(
            <div>
                <h2>Product Details</h2>
                <p>
                    <h5>ProductName:    {this.props.Pname}</h5>
                </p>
            </div>
        )
        
    }
}

export default Product;