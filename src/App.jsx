import { useState } from "react";
import "./App.css";

function App() {
  let [members, setMembers] = useState(null);
  let [totalBill, setTotalBill] = useState(null);
  let [result, setResult] = useState(null);

  function buttondbbo() {
    let billAmount1 = totalBill / members;
    let calculatedResult = billAmount1.toFixed(0);
    setResult(calculatedResult);
  }

  function badlav(e) {
    setMembers(e.target.value);
  }

  function badlav2(e) {
    setTotalBill(e.target.value);
  }
  let xr = null;
  if (result < 200) {
    xr = <div>it is budget frindly maah boy</div>;
  } else if (result > 200) {
    xr = <div>Now you are spending too high man</div>;
  }

  return (
    <>
      <div className="hello">
        <h1>SPLIT-WISE</h1>
        <input
          type="number"
          placeholder="TOTAL BILL"
          value={totalBill}
          onChange={badlav2}
        />
        <br />
        <input
          type="number"
          placeholder="HOW MANY MEMBERS"
          value={members}
          onChange={badlav}
        />
        <br /> <br />
        <br /> <br />
        <button onClick={buttondbbo}>HERE WE GO</button>
        <h2>Share AMOUNT :{result}</h2>
        <h2>SPENDING WAS : {xr}</h2>
      </div>
    </>
  );
}

export default App;
