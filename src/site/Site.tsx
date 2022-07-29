import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";


export const Site = () => {
    return (

        <div>
            <Header title={'New Header'}/>
            <Body titleForBody={'New Body'}/>
            <Footer titleForFooter={'New Footer'}/>
        </div>
    )
}