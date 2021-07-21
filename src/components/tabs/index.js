import { useState } from "react";
import Style from "./tabs.module.css";
import Table from '../table'

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className={Style.container}>
        <div className={Style.blocTabs}>
            <button
            className={toggleState === 1 ? `${Style.tabs} ${Style.activeTabs}` : Style.tabs}
            onClick={() => toggleTab(1)}
            >
            All item
            </button>
            <button
            className={toggleState === 2 ? `${Style.tabs} ${Style.activeTabs}` : Style.tabs}
            onClick={() => toggleTab(2)}
            >
            Sold out
            </button>
            <button
            className={toggleState === 3 ? `${Style.tabs} ${Style.activeTabs}` : Style.tabs}
            onClick={() => toggleTab(3)}
            >
            Archived
            </button>
        </div>

        <div className={Style.contentTabs}>
            <div className={toggleState === 1 ? `${Style.content}  ${Style.activeContent}` : Style.content}>
                <Table/>
            </div>
            <div className={toggleState === 2 ? `${Style.content}  ${Style.activeContent}` : Style.content}>
            </div>
            <div className={toggleState === 3 ? `${Style.content}  ${Style.activeContent}` : Style.content}>
            </div>
        </div>
        </div>
    );
}

export default Tabs;
