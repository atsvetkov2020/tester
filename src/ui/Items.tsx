import React, {Component} from "react";
import {ItemsDashboard} from "./containers/ItemsDashboard";
class Items extends Component{

    render() {
        return (<div>
            <h1 className="">Items

            </h1>
            <ItemsDashboard></ItemsDashboard>
            </div>
        )
    }
}

export default Items;