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
                    <LayoutEg1Demo/>
                    <div>布局一</div>
                </div>
            </li>
            <li>
                <div>
                    <LayoutEg2Demo/>
                    <div>布局二</div>
                </div>
            </li>
            <li>
                <div>
                    <LayoutEg3Demo/>
                    <div>布局三</div>
                </div>
            </li>
            <li>
                <div>
                    <LayoutEg4Demo/>
                    <div>布局四</div>
                </div>
            </li>
        </Fragment>
    );
};
export default LayoutExample;