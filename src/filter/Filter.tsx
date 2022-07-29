import {FilterMethod} from "./FilterMethod";
import React, {useState} from "react";
import {ButtonForFilter} from "./ButtonForFilter";

export const Filter = () => {
    type FilterType = 'All' | 'Ruble' | 'Dollar'

    const money = [
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]
    let currentMoney = money

    const [filter, setFilter] = useState<FilterType>('All')

    if (filter === 'Ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }
    if (filter === 'Dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {

        setFilter(nameButton)
    }
    return (
        <div>
            <FilterMethod currentMoney={currentMoney}/>
            <ButtonForFilter name={'All'} callBack={() => onClickFilterHandler('All')}/>
            <ButtonForFilter name={'Ruble'} callBack={() => onClickFilterHandler('Ruble')}/>
            <ButtonForFilter name={'Dollar'} callBack={() => onClickFilterHandler('Dollar')}/>
        </div>
    )
}