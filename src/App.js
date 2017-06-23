import React, { Component } from 'react'
import './App.css'
// pull in our component
import Expander from './Expander'
// pull in demo data
import data from './data'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // container for demo
    return (
      <div className="App">
        <section>
          <h2>Example 1</h2>
          <Expander dataset={data.set1} />
        </section>
        <section>
          <h2>example 2</h2>
          <p>This example has `showFirst` prop set so the first section is shown by default.</p>
          <p>It also has `customClass` passed for unique styling.</p>
          <Expander dataset={data.set2} customClass="states" showFirst={true} />
        </section>
      </div>
    );
  }
}

export default App
