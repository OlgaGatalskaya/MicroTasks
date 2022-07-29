import React from "react";

type ButtonForFilterType = {
    name: string,
    callBack: ()=>void
}


export const ButtonForFilter = (props:ButtonForFilterType) => {

    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}