import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 40px;
`;

const TopNavigation = styled.div`
  background: #2875c7;
  color: white;
`;
const Days = styled.div`
  width: 100%;
`;
const DayName = styled.div`
  width: ${100 / 7}%;
  display: inline-block;
  font-weight: bold;
  text-align: center;
`;

const CalendarTop = React.createClass({
  render: function() {
    const dayNames = moment.weekdaysShort().map(function (d) {
      return <DayName key={d}>{d}</DayName>;
    });
    return (
      <HeaderContainer>
        <TopNavigation>
          <button onClick={this.props.onPreviousClick}>p</button>
          {this.props.month}
          <button onClick={this.props.onNextClick}>n</button>
        </TopNavigation>
        <Days>
          {dayNames}
        </Days>
      </HeaderContainer>
    )
  }
});

export default CalendarTop;
