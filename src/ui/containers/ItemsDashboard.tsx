import React, {Component, ComponentProps} from "react";
import ItemBox from "../components/ItemBox";

type ItemsDashboardType = {
    refreshDashboardHandler: NodeJS.Timeout | null,
    getItemsHandler: ((...args: any[]) => void) | null,
    items: any[]
};

type DashboardProps = any;

export class ItemsDashboard extends Component<DashboardProps>{

    state: ItemsDashboardType = {
        refreshDashboardHandler: null,
        getItemsHandler: null,
        items: []
    }
    public d: boolean = false;

    debug(message: string){
        if(this.d){
            console.log(message);
        }
    }

    constructor(props: DashboardProps) {
        super(props);
        this.setState({
            getItemsHandler: this.props.getItemsMethod
        });
        this.d = (props.debug === true);
    }
    
    refresh(){
        if(this.state.getItemsHandler){
            const refreshed = this.state.getItemsHandler.call(this);
            this.setState({items: refreshed});
        }
    }

    init(){
        if(!this.state.refreshDashboardHandler && this.state.getItemsHandler){ // check if no refresh process running
            const refreshHandler: NodeJS.Timeout = setInterval(this.state.getItemsHandler, 5000);
            this.setState({refreshDashboardHandler: refreshHandler});
        }
    }

    render() {
        return (
            <div>
                <ItemBox itemstatus="unknown"></ItemBox>
                <ItemBox itemstatus="pass"></ItemBox>
                <ItemBox itemstatus="fail"></ItemBox>
                <ItemBox itemstatus="error"></ItemBox>
                <ItemBox itemstatus="disabled"></ItemBox>
                <ItemBox itemstatus="test"></ItemBox>
            </div>
        );
    }

}