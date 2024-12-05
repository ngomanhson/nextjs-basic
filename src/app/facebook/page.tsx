"use client";

import React from "react";

const Facebook = () => {
    const [count, setCount] = React.useState(0);

    const handleClickBtn = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Facebook</h1>

            <button
                onClick={() => {
                    handleClickBtn();
                }}
            >
                Back to Home
            </button>

            <p>Count: {count}</p>
        </div>
    );
};

export default Facebook;
