import {Button} from "./Button";
import React from "react";


export const ButtonMain = () => {
    const Button1Foo = (name: string, age: number) => {
        console.log(`I am ${name} and I have ${age}`)
    }
    const Button2Foo = (name: string, age: number) => {
        console.log(`I am ${name}and I have ${age}`)
    }

    const Button3Foo = () => {
        console.log('I am stupid button')
    }
    return (
        <div>
            {/*<componentsbtn onClick={(event) => {console.log('Hello')}}>MyYouTubeChanel-1</componentsbtn>*/}
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Olga', 35)}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Ivan', 39)}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>
        </div>

    )
}