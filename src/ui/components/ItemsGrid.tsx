import React from "react";
import '../../App.css';
import ItemBox from "./ItemBox";

const grid = (props: any) => {

    const elem = (<div className="itemsgrid">
        {   props.items.map((item:any, index:number) => {
                return (
                    <ItemBox itemstatus={item.status} title={item.name}></ItemBox>
                );
            })
        }
    </div>);

    return elem;
}

export default grid;