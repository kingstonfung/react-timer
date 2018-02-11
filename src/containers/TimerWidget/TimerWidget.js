import React from 'react';

import Button from '../../components/ui/Button/Button';
import TimeDisplay from '../../components/ui/TimeDisplay/TimeDisplay';

class TimerWidget extends React.Component {
  timer = {};

  tick = () => {
    console.log(+new Date());
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
    // this.setState({timer});
  };

  componentWillUnmount() {
    console.log('done');
    this.clearInterval(this.timer);
    // this.clearInterval(this.state.timer);
  };

  render() {
    return (
      <div>
        <div>
          <p>Client Interaction</p>
          <TimeDisplay />
          <Button />
          <Button />
        </div>
        <div>
          <p>After Interaction</p>
          <TimeDisplay />
          <Button />
          <Button />
        </div>
      </div>
    )
  }
}

export default TimerWidget;
