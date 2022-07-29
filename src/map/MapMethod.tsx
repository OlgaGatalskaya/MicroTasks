import React from "react";

type CarsType = {
    cars: Array<CarsElementsType>
}

type CarsElementsType = {
    manufacturer: string,
    model: string
}

export const MapMethod = (props: CarsType) => {


    return (

        <table>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {props.cars.map((car, index) => {
                return (
                    <tr key={index}>
                        <td>
                            {car.manufacturer}
                        </td>
                        <td>
                            {car.model}
                        </td>
                    </tr>

                )
            })}
            </tbody>
        </table>
    )
}