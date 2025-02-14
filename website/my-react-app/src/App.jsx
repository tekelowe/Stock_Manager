import React, { useState } from "react";
import Header from "./Header";
import Calculator from "./Calculator"; // Import the new component
import CSVUploader from "./CSVUploader";


function App() {
    const [result, setResult] = useState(null);

    return (
        <div>
            {/* Header in its own div */}
            <div className="header-container">
                <Header />
            </div>

            {/* Calculator in its own div */}
            <div className="calculator-container">
                <Calculator onCalculate={setResult} />
                {result !== null && <h3>Result: {result}</h3>}

            </div>
            
            <div>
                <CSVUploader/>
            </div>
            
        </div>
    );
}

export default App;