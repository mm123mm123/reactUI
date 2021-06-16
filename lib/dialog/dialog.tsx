import React, {Fragment} from 'react';
import Icon from '../icon/icon';
import './dialog.scss';

interface dialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
    visible: boolean
}

function scopedClassMaker(prefix: string) {
    return (...suffix: string[]) => [prefix, ...suffix].filter(Boolean).join('-');
}

const scopedClass = scopedClassMaker('rui-dialog');
const Dialog: React.FunctionComponent<dialogProps> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className={scopedClass('mask')}/>
                <div className={scopedClass('')}>
                    <header className={scopedClass('header')}>
                        <span>提示</span>
                        <Icon name="close" className={scopedClass('icon')}/>
                    </header>
                    <main className={scopedClass('main')}>
                        {props.children}
                    </main>
                    <footer className={scopedClass('footer')}>
                        <button>ok</button>
                        <button>cancel</button>
                    </footer>
                </div>
            </Fragment>
            : null
    );
};
export default Dialog;