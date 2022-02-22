import React from "react";
import PropTypes from "prop-types";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { format, parse } from "date-fns";

console.log(format);

class DatePick extends React.Component {
  static propTypes = {
    format: PropTypes.string
  };
  static defaultProps = {
    format: "MMMM DD, YYYY"
  };
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
      isDisabled: false
    };
  }
  handleDayChange(selectedDay, modifiers) {
    this.setState({
      selectedDay,
      isDisabled: modifiers.disabled === true
    });
  }

  render() {
    const { selectedDay, isDisabled } = this.state;

    return (
        <div style={{ margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center" }}>
           
       
         <h3> Select a day, then try to edit the input.</h3>
        <br/><br/>
        <div>
          {!selectedDay && "🤔 Type or pick a valid day"}
          {selectedDay && isDisabled && "😡 This day is disabled"}
          {selectedDay &&
            !isDisabled &&
            `😄 You choose ${selectedDay.toLocaleDateString()}`}
       </div>
        <DayPickerInput
          format="MMMM DD, YYYY"
          formatDate={format}
          parseDate={parse}
          value={selectedDay}
          onDayChange={this.handleDayChange}
          dayPickerProps={{
            selectedDays: selectedDay,
            disabledDays: {
              daysOfWeek: [0, 6]
            }
          }}
        />
      </div>
    );
  }
}
export default DatePick;