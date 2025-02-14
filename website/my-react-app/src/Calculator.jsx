import React, { useState } from "react";
import "./Calculator.css";


function Calculator({ onCalculate }) {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null); // To store the result

    const handleAddition = async () => {
        const response = await fetch("http://localhost:5002/api/transactions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ num1: parseInt(num1), num2: parseInt(num2) }), // Send numbers as JSON
        });
        console.log("Values sent to the API");
    };

    return (
        <div>
            <h2>Sales List Upload</h2>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Enter first number"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Enter second number"
            />
            <button onClick={handleAddition}>Add</button>
            {/* Display result */}
            {result !== null && <p>Result: {result}</p>}
        </div>
    );
}

export default Calculator;
