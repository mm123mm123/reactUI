import React, {Fragment, ReactElement} from 'react';
import Icon from '../icon/icon';
import './dialog.scss';
import ReactDOM from 'react-dom';

interface dialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
    visible: boolean;
    buttons: Array<ReactElement>;
    closeOnClick: React.MouseEventHandler;
    isMaskCloseOnClick?: boolean
}

function scopedClassMaker(prefix: string) {
    return (...suffix: string[]) => [prefix, ...suffix].filter(Boolean).join('-');
}

const scopedClass = scopedClassMaker('rui-dialog');

const Dialog: React.FunctionComponent<dialogProps> = (props) => {
    const dialogHtmlString = (props.visible ?
        <Fragment>
            <div className={scopedClass('mask')}
                 onClick={props.isMaskCloseOnClick ? props.closeOnClick : () => {
                 }}/>
            <div className={scopedClass('')}>
                <header className={scopedClass('header')}>
                    <span>提示</span>
                    <Icon name="close" className={scopedClass('icon')}
                          onClick={props.closeOnClick}/>
                </header>
                <main className={scopedClass('main')}>
                    {props.children}
                </main>
                <footer className={scopedClass('footer')}>
                    {props.buttons.map((button, index) => {
                        return React.cloneElement(button, {key: index})
                    })}
                </footer>
            </div>
        </Fragment>
        : null)
    return (
        ReactDOM.createPortal(dialogHtmlString, document.body)
    )
};
Dialog.defaultProps = {
    isMaskCloseOnClick: false
}
export default Dialog;