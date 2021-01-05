import React, {Component, ComponentProps} from "react";
import ItemBox from "../components/ItemBox";
import ItemGrid from "../components/ItemsGrid"

/*
type ItemsDashboardType = {
    refreshDashboardHandler: NodeJS.Timeout | null,
    getItemsHandler: ((...args: any[]) => void) | null,
    items: any[]
};
*/
type ItemsDashboardType = {
    refreshDashboardHandler: NodeJS.Timeout | null,
    getItemsHandler: ((...args: any[]) => void) | null
};

type DashboardProps = any;

export class ItemsDashboard extends Component<DashboardProps>{

    state: ItemsDashboardType = {
        refreshDashboardHandler: null,
        getItemsHandler: null
    }
    public d: boolean = false;
    private getItemsHandler: any;

    debug(message: string){
        if(this.d){
            console.log(message);
        }
    }

    constructor(props: DashboardProps) {
        super(props);
        this.getItemsHandler = this.props.getItemsMethod;
        this.d = (props.debug === true);
    }
    
    refresh(){
        if(this.getItemsHandler){
            const refreshed = this.getItemsHandler.call(this);
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
        const items = this.getItemsHandler();
        return (
            <div>
                <ItemGrid items={items}></ItemGrid>
            </div>
        );
    }

}