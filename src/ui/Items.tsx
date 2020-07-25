import React, {Component} from "react";
import {ItemsDashboard} from "./containers/ItemsDashboard";

type ItemsProps = any;

class Items extends Component<ItemsProps>{

    render() {
        return (<div>
            <h1 className="">Items</h1>
            <ItemsDashboard getItemsMethod={this.props.getItemsHandler}></ItemsDashboard>
            </div>
        )
    }
}

export default Items;