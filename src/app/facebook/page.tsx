"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

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

            <Button variant="success">Primary</Button>

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
