import React, { Component } from 'react';
import MarkdownArea from './MarkdownArea';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Markdown Preview</h2>
          <MarkdownArea />
      </div>
    );
  }
}

export default App;
