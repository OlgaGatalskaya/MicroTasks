import {MapMethod} from "./MapMethod";

export const Map = () => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}]
    return (
        <MapMethod cars={topCars}/>
    )
}