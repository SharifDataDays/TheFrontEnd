import 'highlight.js/styles/atom-one-dark.css';
import React from 'react';
import hljs from 'highlight.js';

class CodeBlock extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  setRef(el) {
    this.codeEl = el;
  }

  highlightCode() {
    hljs.highlightBlock(this.codeEl);
  }

  render() {
    const { language, value } = this.props;
    return (
      <pre style={{ textAlign: 'left' }}>
        {language === 'python' ? <p dir="LTR">In:</p> : <p dir="LTR">Out:</p>}
        <code ref={this.setRef} className="language-python">
          {value}
        </code>
      </pre>
    );
  }
}

export default CodeBlock;
