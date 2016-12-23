import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import CalendarTop from './CalendarTop';
import Week from './Week';

moment.updateLocale('en', {
  weekdaysShort : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  week: { dow: 1 }
});
moment.locale('en');

const CalendarContainer = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: solid 1px #cccccc;
`;

let Calendar = React.createClass({
  getInitialState: function() {
    return {
      month: moment().startOf('day')
    };
  },

  previous: function() {
    var month = this.state.month;
    month.add(-1, 'M');
    this.setState({ month: month });
  },

  next: function() {
    var month = this.state.month;
    month.add(1, 'M');
    this.setState({ month: month });
  },

  render: function() {
    return (
      <CalendarContainer>
        <CalendarTop month={this.renderMonthLabel()} onPreviousClick={this.previous} onNextClick={this.next} />
        {this.renderWeeks()}
      </CalendarContainer>
    );
  },

  renderWeeks: function() {
    let weeks = [],
      done = false,
      date = this.state.month.clone().startOf('month').add('w' - 1).day(moment.weekdays()[0]),
      monthIndex = date.month(),
      count = 0;

    while (!done) {
      weeks.push(<Week key={date.toString()} date={date.clone()} month={this.state.month} />);
      date.add(1, 'w');
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  },

  renderMonthLabel: function() {
    return <span>{this.state.month.format('MMMM, YYYY')}</span>;
  }
});

export default Calendar;
