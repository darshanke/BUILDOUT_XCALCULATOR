import react, { useState } from "react";
import "./App.css";
function App() {
  const [data,setData] = useState('');
  const [show,setshow] = useState(false);
  const [details,setdetails] = useState("");

  const buttonValues = [
    7,
    8,
    9,
    "+",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "*",
    "C",
    0,
    "=",
    "/",
  ];


  const calculateNewValue = (value) => {
    if (value === "C") {
      setData("");
      setshow(false);
    } else if (value === "=") {
      try {
        setshow(true);
        setdetails(eval(data).toString()); 
      } catch (error) {
        setData("Error");
      }
    } else if(show){
      setshow(false);
      setData(details+value);
      
    }else{
      setData(data+ value)
    }
  }
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <br />

      <input type="text" style={{ height: "20px" }} value={data} />
      {show && <p>{details}</p>}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem",
        }}
      >
     
        <div style={{ width: "260px" }}>
          {buttonValues.map((item) => (
            <button
              onClick={() => calculateNewValue(item)}
              key={item}
              style={{
                width: "50px",
                height: "50px",
                margin: "4px",
                borderRadius: ".5rem",
                boder: " 10px   solid",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
