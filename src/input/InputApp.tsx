import {ChangeEvent, useState} from "react";
import {FullInput} from "./FullInput";
import {Input} from "./Input";
import {ButtonForInput} from "./ButtonForInput";


export const InputApp = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')
    console.log(title)

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])

    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }


    return (
        <div>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <ButtonForInput name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>

    )

}