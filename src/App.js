import React from "react";

import "./App.css";

import ProductList from "./components/ProductList/ProductList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      people: null,
    };
  }

  async componentDidMount() {
    const fetchURL = `https://swapi.dev/api/people`;
    const fetchedData = await fetch(fetchURL);
    const fetchedDataJSON = await fetchedData.json();
    const fetchedPeople = fetchedDataJSON.results;
    this.setState({
      isLoading: false,
      people: fetchedPeople,
    });
  }

  render() {
    if (this.state.isLoading) {
      return <p>The data is fetching...</p>;
    } else if (!this.state.people) {
      return <p>Didn't find any person</p>;
    } else {
      return <ProductList people={this.state.people} />;
    }
  }
}

export default App;
