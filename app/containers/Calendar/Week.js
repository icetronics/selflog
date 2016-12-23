import React from 'react';
import styled from 'styled-components';

const DayCell = styled.span`
  display: inline-block;
  height: 20%;
  width: ${100 / 7}%;
  background-color: ${props => (props.today ? 'green' : (props.otherMonth ? 'gray' : 'transparent'))};
`;

const Week = React.createClass({
  render: function() {
    let days = [],
      date = this.props.date,
      month = this.props.month;

    for (let i = 0; i < 7; i++) {
      let day = {
        name: date.format('dd').substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), 'day'),
        date: date
      };
      days.push(
        <DayCell
          key={day.date.toString()}
          today={day.isToday}
          otherMonth={!day.isCurrentMonth}
        >
          {day.number}
        </DayCell>);
      date = date.clone();
      date.add(1, 'd');
    }

    return (
      <div key={days[0].toString()}>
        {days}
      </div>
    );
  }
});

export default Week;