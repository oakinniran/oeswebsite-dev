import React from 'react'
import './Button.css'

const STYLES =  ['btn', 'btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    url,
    children,
    type,
    onClick,
    buttonSize,
    buttonStyle,
})=>{
    const checkButtonStyle = STYLES.includes (buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <a href={url} className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}` }
            onClick = {onClick}
            type={type}
            >
                {children}
            </button>


        </a>
    )
}
