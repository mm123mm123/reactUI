import React from 'react';

import ReactDom from 'react-dom';
import Icon from './icon/icon';


const fn: React.MouseEventHandler<SVGUseElement> = (e) => {
    console.log(e.target);
};
ReactDom.render(<div><Icon name="success" onClick={fn}/></div>, document.querySelector('#root'));