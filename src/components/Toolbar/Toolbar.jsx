import React from 'react';
import classes from './Toolbar.module.scss';

const Toolbar = ({ bold, setBold, italic, setItalic, align, setAlign, underline, setUnderline }) => {

    const toggleBold = () => {
        setBold(!bold)
    }

    const toggleItalic = () => {
        setItalic(!italic)
    }

    const changeAlignment = (align) => {
        setAlign(align)
    }

    const toggleUnderline = () => {
        setUnderline(!underline)
    }
    return (
        <div className={classes.container}>
            <i 
                className="fa fa-bold"
                onClick={toggleBold}
            >
            </i>
            <i 
                className="fas fa-italic"
                onClick={toggleItalic}
            >
            </i>
            <i 
                className="fas fa-underline"
                onClick={toggleUnderline}
            >
            </i>
            <i 
                className="fas fa-align-right"
                onClick={() => changeAlignment('right')}
            >
            </i>
            <i 
                className="fas fa-align-center"
                onClick={() => changeAlignment('center')}
            ></i>
            <i 
                className="fas fa-align-left"
                onClick={() => changeAlignment('left')}
            ></i>
        </div>
    )
};

export default Toolbar;