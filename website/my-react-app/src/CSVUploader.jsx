import { useState } from "react";
import { Papa } from "papaparse";
import "./CSVUploader.css"

function CSVUploader() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      parseCSV(uploadedFile);
    }
  };

  const parseCSV = (file) => {
    const reader = new FileReader();
    reader.onload = ({ target }) => {
      Papa.parse(target.result, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          setData(result.data);
          console.log("Parsed Data:", result.data);
        },
      });
    };
    reader.readAsText(file);
  };

  return (
    <div className="uploader-container">
      <h2>Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {file && <p>Uploaded: {file.name}</p>}
      {data.length > 0 && (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
export default CSVUploader;