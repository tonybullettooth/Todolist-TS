import React from 'react';

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
    active: boolean
}
const Button: React.FC<ButtonPropsType> = ({
                                               title,
                                               onClickHandler,
                                               active,
                                           }) => {

    return <button
        className={active ? "active" : ""}
        onClick={onClickHandler}>
        {title}
    </button>;
};

export default Button;