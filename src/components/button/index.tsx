import React from 'react';
import DefaultButton from '@material-ui/core/Button';
import { useStyles } from './styles';

interface ButtonProps {
    children: React.ReactNode,
    onClick?: () => void,
    outlined?: boolean,
    secondary?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, outlined, secondary, onClick, ...props }) => {
    const classes = useStyles();

    return (
        <>
            <DefaultButton
                variant={outlined ? "outlined" : "contained"}
                classes={classes}
                onClick={onClick}
                color={secondary ? "secondary" : "primary"}
                {...props}
            >
                {children}
            </DefaultButton>
        </>
    )
}

export default Button;