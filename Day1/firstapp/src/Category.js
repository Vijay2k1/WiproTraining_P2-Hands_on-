import {Component} from "react";
class Category extends Component{
    render(){
        return(
            <div>
                <h2>Category details</h2>
                <h5>CategoryName: {this.props.Cname}</h5>
            </div>
        )
        
    }
}

export default Category;
