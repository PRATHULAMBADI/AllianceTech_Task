import React from 'react';

import { DatePickerInput } from 'rc-datepicker';

import 'rc-datepicker/lib/style.css';

export default class Calendar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedDate: '2017-08-13'
    };
  }
  onChange=(date) =>{
    this.setState({
      selectedDate: date
    });
  }
  render() {
    return (
      <div>
        <DatePickerInput
          onChange={this.onChange}
          value={this.state.selectedDate}
          className='my-custom-datepicker-component'
          placeholder="DD/MM/YYYY"
        />
      </div>
    );
  }
}