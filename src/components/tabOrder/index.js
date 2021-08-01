import { useState } from "react";
import Style from "./tabs.module.css";

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
            Not yet paid
            </button>
            <button
            className={toggleState === 3 ? `${Style.tabs} ${Style.activeTabs}` : Style.tabs}
            onClick={() => toggleTab(3)}
            >
            Packed
            </button>
            <button
            className={toggleState === 4 ? `${Style.tabs} ${Style.activeTabs}` : Style.tabs}
            onClick={() => toggleTab(4)}
            >
            Sent
            </button>
            <button
            className={toggleState === 5 ? `${Style.tabs} ${Style.activeTabs}` : Style.tabs}
            onClick={() => toggleTab(5)}
            >
            Completed
            </button>
            <button
            className={toggleState === 6 ? `${Style.tabs} ${Style.activeTabs}` : Style.tabs}
            onClick={() => toggleTab(6)}
            >
            Order cancel
            </button>
        </div>

        <div className={Style.contentTabs}>
            <div className={toggleState === 1 ? `${Style.content}  ${Style.activeContent}` : Style.content}>
            </div>
            <div className={toggleState === 2 ? `${Style.content}  ${Style.activeContent}` : Style.content}>
            </div>
            <div className={toggleState === 3 ? `${Style.content}  ${Style.activeContent}` : Style.content}>
            </div>
            <div className={toggleState === 4 ? `${Style.content}  ${Style.activeContent}` : Style.content}>
            </div>
            <div className={toggleState === 5 ? `${Style.content}  ${Style.activeContent}` : Style.content}>
            </div>
            <div className={toggleState === 6 ? `${Style.content}  ${Style.activeContent}` : Style.content}>
            </div>
        </div>
        </div>
    );
}

export default Tabs;