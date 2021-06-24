import React, {Fragment} from 'react';
import "./layoutExam.scss"
import LayoutEg1Demo from "./layoutEaxmple/layoutEg1/layoutEg1Demo";
import LayoutEg2Demo from "./layoutEaxmple/layoutEg2/layoutEg2Demo";
import LayoutEg3Demo from "./layoutEaxmple/layoutEg3/layoutEg3Demo";
import LayoutEg4Demo from "./layoutEaxmple/layoutEg4/layoutEg4Demo";


const LayoutExample: React.FunctionComponent = () => {
    return (
        <Fragment>
            <li>
                <div>
                    <div>布局一</div>
                    <LayoutEg1Demo/>
                </div>
            </li>
            <li>
                <div>
                    <div>布局二</div>
                    <LayoutEg2Demo/>
                </div>
            </li>
            <li>
                <div>
                    <div>布局三</div>
                    <LayoutEg3Demo/>

                </div>
            </li>
            <li>
                <div>
                    <div>布局四</div>
                    <LayoutEg4Demo/>

                </div>
            </li>
        </Fragment>
    );
};
export default LayoutExample;