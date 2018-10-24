import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentFilter: null,
      filters: [],
      fruit: []
    };
  }

  componentDidMount() {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleChange = event => {
    console.log('update filter to: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        onUpdateFilter={this.handleChange}
      />
    );
  }
}

export default App;
