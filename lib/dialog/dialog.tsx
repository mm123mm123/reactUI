import React, {Fragment, ReactElement, ReactFragment, ReactNode} from 'react';
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
const alert = (content: string) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = (
        <Dialog visible={true}
                buttons={[<button onClick={() => onClose()}>ok</button>]}
                closeOnClick={() => {
                    onClose()
                }}>
            {content}
        </Dialog>)
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(component, div)
};
const confirm = (content: string, yes?: Function, no?: Function) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = (
        <Dialog visible={true}
                buttons={[<button onClick={() => {
                    onClose();
                    yes && yes()
                }}>ok</button>,
                    <button onClick={() => {
                        onClose();
                        no && no()
                    }}>cancel</button>,
                ]}
                closeOnClick={() => {
                    onClose()
                    no && no()
                }}>
            {content}
        </Dialog>)
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(component, div)
}
const modal = (content: ReactNode | ReactFragment) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = (
        <Dialog visible={true}
                buttons={[]}
                closeOnClick={() => {
                    onClose()
                }}>
            {content}
        </Dialog>)
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(component, div)
    return onClose
}

export
{
    alert, confirm, modal
}
export default Dialog;