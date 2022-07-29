import {useState} from "react";
import {ChangeEvent} from "react";

type FullInputTypes = {
    addMessage: (title:string)=> void
}


export const FullInput = (props:FullInputTypes) => {
    let [title, setTitle] = useState('')
    //console.log(title)

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {

        setTitle(event.currentTarget.value)

    }

    const onClickButtonHandler = () => {
        props.addMessage(title);
        setTitle('')

    }


    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}