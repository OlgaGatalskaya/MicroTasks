import React from "react";



type MoneyType = {
    currentMoney: Array<MoneyTypeArray>
}
type MoneyTypeArray = {
    banknots: string,
    value: number,
    number: string
}


export const FilterMethod = (props:MoneyType) => {


    return (
        <div>
            <ul>
                {props.currentMoney.map((objectFromMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span>{objectFromMoneyArray.banknots}</span>
                            <span>{objectFromMoneyArray.value}</span>
                            <span>{objectFromMoneyArray.number}</span>
                        </li>
                    )
                })}

            </ul>

        </div>

)
}