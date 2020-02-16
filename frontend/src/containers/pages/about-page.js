import React, { Component} from 'react';

import { connect } from 'react-redux';
import { aboutCircleOpened, aboutCircleClosed} from '../../actions';

class AboutPage extends Component {

  componentDidMount() {
    const { aboutCircleOpened } = this.props;
    aboutCircleOpened();
  }

  componentWillUnmount() {
    const { aboutCircleClosed } = this.props;
    aboutCircleClosed();
  }

  render() {
    return (
      <div></div>
    );
  }
}

const mapStateToProps = ({ showState: { showAboutCircle }}) => {
  return { showAboutCircle };
};

const mapDispatchToProps = {
  aboutCircleOpened,
  aboutCircleClosed
};


export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);