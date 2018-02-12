import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/ui/Button/Button';
import TimeTextDisplay from '../../components/ui/TimeTextDisplay/TimeTextDisplay';
import * as actions from '../../store/actions/timerActions';

class TimerWidget extends React.Component {
  componentDidMount() {
    // this.timer = setInterval(this.tick, 1000);
    // this.setState({timer});
  };

  componentWillUnmount() {
    // this.clearInterval(this.timer);
    // this.clearInterval(this.state.timer);
  };

  onClientTimerStartClick = () => {
    this.props.toggleTimerAction(true);
  };

  onClientTimerStopClick = () => {
    console.log('this.props.timerRef', this.props.timerRef);
    this.props.toggleTimerAction(false, this.props.timerRef);
  };

  render() {
    return (
      <div>
        <div>
          <p>Client Interaction</p>
          <TimeTextDisplay />
          <Button label='Start' clicked={this.onClientTimerStartClick} />
          <Button label='Stop' clicked={this.onClientTimerStopClick}/>
        </div>
        <hr />
        <div>
          <p>After Interaction</p>
          <TimeTextDisplay />
          <Button label='Reset' />
          <Button label='Stop' />
        </div>
      </div>
    )
  }
}

const mapsStateToProps = state => {
  return {
    time: state.time,
    running: state.running,
    timerRef: state.timerRef
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTimerAction: (running, timerRef) => dispatch(actions.setTimerToRun(running, timerRef))
  }
};

export default connect(mapsStateToProps, mapDispatchToProps)(TimerWidget);
