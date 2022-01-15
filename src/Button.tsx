import React from 'react';

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
}
const Button: React.FC<ButtonPropsType> = ({
                                               title,
                                               onClickHandler,
                                           }) => {

    return <button onClick={onClickHandler}>{title}</button>;
};

export default Button;