import React from 'react';
import {print_num} from './print_num.js';

class NumberDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDisplay: "",
      toWebBrowser: "",
      text: "something"
    };
  }

  componentDidMount() {
    alert(2);
    const iterator = prompt('enter num', '10');
    let toDisplay = "";
    let toWebBrowser = "";
    for (let i = 1; i <= iterator; i++) {
      toDisplay += i;
      toWebBrowser += i;
    }
    for (let j = 10; j >= 1; j--) {
      toDisplay += '\n';
      toDisplay += j;
      toWebBrowser += '<br>';
      toWebBrowser += j;
    }

    console.log(toDisplay); // печать в консоли браузера
    console.log(toWebBrowser);
    alert(toDisplay); // вывод на экран окна с сообщением
    //text = toDisplay;

    this.setState({
      toDisplay: toDisplay,
      toWebBrowser: toWebBrowser
    });
  }

  onClickButton1 = () => {
        this.setState({
            text: 'clicked 1'
        });
  }

  onClickButton2 = () => {
        this.setState({
            text: print_num()
        })
  }

  render() {
    return (
      <div>
        <p>{this.state.toDisplay}</p>
        { <p dangerouslySetInnerHTML={{ __html: this.state.toWebBrowser }}></p>}
        <button onClick={this.onClickButton1}>
			Button 1
		</button>
        <button onClick={this.onClickButton2}>
			Button 2
		</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default NumberDisplay;