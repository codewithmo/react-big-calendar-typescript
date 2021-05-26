import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);

export const App: React.FC = () =>{
  const events = [
    {
      title: "Event 1",
      start: moment().toDate(),
      end: moment().add(0, "days").toDate(),
      backgroung: '#FF0000',
      border: '1px solid #edb6b4'
    },
    {
      start: moment().toDate(),
      end: moment().add(0, "days").toDate(),
      title: "Some title",
    },
    {
      start: moment().toDate(),
      end: moment().add(0, "days").toDate(),
      title: "Some title",
    },
    {
      start: moment('20-05-2021'),
      end: moment().add(0, "days").toDate(),
      title: "Some title shgvisgbivsbihwgiubvsbuihywovguhwbviuhwebviuwybfiuyg",
    },
    {
      start: moment().toDate(),
      end: moment().add(0, "days").toDate(),
      title: "Some title",
    },
  ];

  const styleEvents = (event: any) => {
   const bgeventclr = event.bgColor;
    const style = {
      borderLeft: "5px solid",
      display: "block",
      background: bgeventclr || 'blue',
      border: '2px solid black'
    }
    return{ style: style};
    
  }

  return (
    <div className="App">
        <Calendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={events}
          localizer={localizer}
          style={{ height: "100vh" }}
          eventPropGetter={styleEvents}
          titleAccessor={ (event) => (event.title)}
          tooltipAccessor= { (event) => (event.title)}
          selectable={true}
          onSelectSlot={(selectSlot)=>{
            alert(`${selectSlot.start} and ${selectSlot.end}`)
          }}
        />
      </div>
  )

};
// interface IEvents {
//   title: string,
//   start: Date,
//   end: Date,
//   resource: {
//     flag: string
//   }
// }

// const styleEvents = (event: IEvents, start ?: Date, end ?: Date, isSelected ?: boolean) => {
//   if (event.resource.flag === 'Imp') {
//     const style = {
//       borderLeft: "5px solid",
//       display: "block",
//       background: 'red'
//   };
//     return style;
//   };


 