import React from "react";
import logo from "./logo.svg";
import "./App.css";

const generateElement = (key, value) => {
  return (
    <div key={key} className="row">
      <div className="col-xs-6 ins-label">{key}</div>
      <div className="col-xs-6">{value}</div>
    </div>
  );
};

function generateData(data) {
  const newData = Object.keys(data).reduce((result, currentKey) => {
    if (
      typeof data[currentKey] === "string" ||
      data[currentKey] instanceof String
    ) {
      const elementToPush = generateElement(currentKey, data[currentKey]);
      result.push(elementToPush);
    } else {
      const nested = generateData(data[currentKey]);
      result.push(...nested);
    }
    return result;
  }, []);
  return newData;
}

class App extends React.Component {
  render() {
    const { data } = this.props;
    return <div>{generateData(data)}</div>;
  }
}

export default App;
