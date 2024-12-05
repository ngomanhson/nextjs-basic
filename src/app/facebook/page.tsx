"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Facebook = () => {
    const [count, setCount] = React.useState(0);

    const router = useRouter();

    const handleClickBtn = () => {
        setCount(count + 1);
    };

    const handleClickGoHome = () => {
        router.push("/");
    };

    return (
        <div>
            <h1>Facebook</h1>

            <button
                onClick={() => {
                    handleClickBtn();
                }}
            >
                Click me
            </button>

            <p>Count: {count}</p>

            <button
                onClick={() => {
                    handleClickGoHome();
                }}
            >
                Go to Home
            </button>
        </div>
    );
};

export default Facebook;
