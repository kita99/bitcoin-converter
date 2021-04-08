const App = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input type="number" />
        </div>
        <div className="col">
          <input type="text" />
        </div>
        <div className="col">
          <select>
            <option value="test">Test</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h5>The amount of bitcoins for [currency] [valueinput] </h5>
        </div>
        <div className="col">
          <h1>RESULT</h1>
        </div>
      </div>
    </>
  );
}

export default App;
