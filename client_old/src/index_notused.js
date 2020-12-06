'use strict';


const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {

    return e(
      'div',
      { onClick: () => this.setState({ liked: true }) },
      'Hello to Pokédex'
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);