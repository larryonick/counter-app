import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };
  styles = {
    fontSize: "40px",
    fontWeight: "bold"
  };
  // constructor() {
  //   super();
  //   this.handleIncerement = this.handleIncerement.bind(this);
  // }
  handleIncerement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncerement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "danger" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
