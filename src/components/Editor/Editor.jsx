import React, { useState } from 'react';
import classes from './Editor.module.scss';
import { mergeClasses } from '../../utils/mergeClasses';

const Editor = ({ bold, italic, align, underline }) => {

    const [value, setValue] = useState('')
    const handleChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }
    return (
        <div 
            contentEditable 
            onChange={handleChange}
            value={value}
            className={
                mergeClasses(classes.container, 
                            [bold, classes.bold],
                            [italic, classes.italics],
                            [underline, classes.underline],
                            [align === 'center', classes.align__center],
                            [align === 'left', classes.align__left],
                            [align === 'right', classes.align__right]
                )
            }
        >
        </div>
    )
}
export default Editor;