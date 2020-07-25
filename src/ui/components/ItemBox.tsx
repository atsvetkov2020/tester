import React from "react";
import '../../App.css';
// import your fontawesome library
import '../../plugins/fontawesome/fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const item = (props: any) => {
    let itemBoxIconClass = ["itembox-icon"];
    let itemBoxClass = ["itembox"];
    let iconDistr: IconProp = ['fas', 'bullseye'];
    let spin: boolean = false;
    switch(props.itemstatus){
        case "undefined":
        case "unknown":
        case "notstarted":
            iconDistr = ['fas', 'bullseye'];
            itemBoxClass.push("itembox-undefined");
            itemBoxIconClass.push ("itembox-icon-undefined");
            break;
        case "pass":
            iconDistr = ['fas', 'check'];
            itemBoxClass.push("itembox-pass");
            itemBoxIconClass.push ("itembox-icon-pass");
            break;
        case "fail":
            iconDistr = ['fas', 'exclamation-triangle'];
            itemBoxClass.push("itembox-fail");
            itemBoxIconClass.push ("itembox-icon-fail");
            break;
        case "error":
            iconDistr = ['fas', 'bolt'];
            itemBoxClass.push("itembox-error");
            itemBoxIconClass.push ("itembox-icon-error");
            break;
        case "disabled":
            iconDistr = ['fas', 'ban'];
            itemBoxClass.push("itembox-disabled");
            itemBoxIconClass.push ("itembox-icon-disabled");
            break;
        case "test":
            iconDistr = ['fas', 'spinner'];
            itemBoxClass.push("itembox-test");
            itemBoxIconClass.push ("itembox-icon-test");
            spin = true;
            break;
    }

    return (
        <div className={itemBoxClass.join(" ")}>
            <div className="itembox-iconarea">
            <FontAwesomeIcon icon={iconDistr} spin={spin} size="2x" className={itemBoxIconClass.join(" ")} />
            </div>
            <div className="itembox-content">
                <span className="itembox-title">{props.title}</span>
                <span className="itembox-starttime">{new Date(Date.now()).toUTCString()}</span>
            </div>
        </div>
    )
}

export default item;
