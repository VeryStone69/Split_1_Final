import React from 'react';

type CounterPropsType = {
    count: number
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    const {count} = props
    return (
        <div className={count === 5 ? "counterRED" : "counter"}>
            {count}
        </div>
    );
};

export default Counter;