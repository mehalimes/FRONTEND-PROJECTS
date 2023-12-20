import React, { useRef, useState } from "react";
import PlusIcon from "./../images/icon-plus.svg";
import MinusIcon from "./../images/icon-minus.svg";
import { useDispatch } from "react-redux";
import { changeActiveState, changeAllToFalse } from "../faq/faqSlice";
import "./../styles/FaqItem.css";

export default function FaqItem(props) {
    const dispatch = useDispatch();
    const handleClickEvent = (activeParam) => {
        if(activeParam == true){
            dispatch(changeAllToFalse());
        }
        else {
            dispatch(changeAllToFalse());
            dispatch(changeActiveState(props.index));
        }
    }
    return (
        <>
            <div className="faq-item-container">
                <div id="first">
                    <h2>{props.item.text}</h2>
                </div>
                <div id="second">
                    <img src={props.item.active ? MinusIcon : PlusIcon} onClick={() => handleClickEvent(props.item.active)}/>
                </div>
            </div>
            <div className={props.item.active ? "visible" : "unvisible"}>
                <p>Frontend Mentor offers realistic coding challenges to help<br />developers improve their frontend coding skills with projects in <br />HTML, CSS, and JavaScript. It's suitable for all levels and ideal for<br /> portfolio building.</p>
            </div>
        </>
    );
}