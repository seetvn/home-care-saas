import React, {useState, useRef, useEffect} from 'react';
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";
import Zoom from "./Zoom";
import Button from "@mui/material/Button";

const Scheduler = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [config, setConfig] = useState({

    startDate: "2024-03-15",
    days: 31,
    scale: "Day",
    timeHeaders: [
      {groupBy: "Month"},
      {groupBy: "Day", format: "d"}
    ],
    cellWidthSpec: "Auto",
    cellWidth: 50,
    durationBarVisible: false,
    treeEnabled: true,
    rowHeaderColumns: [
      {name: "Patients"},
    ],
    onEventMoved: args => {
      console.log("Event moved: ", args.e.data.id, args.newStart, args.newEnd, args.newResource);
      getScheduler().message("Event moved " + args.e.data.text);
    },
    onEventResized: args => {
      console.log("Event resized: ", args.e.data.id, args.newStart, args.newEnd);
      getScheduler().message("Event resized: " + args.e.data.text);
    },
    onTimeRangeSelected: args => {
      DayPilot.Modal.prompt("New event name", "Event").then(modal => {
        getScheduler().clearSelection();
        if (!modal.result) {
          return;
        }
        getScheduler().events.add({
          id: DayPilot.guid(),
          text: modal.result,
          start: args.start,
          end: args.end,
          resource: args.resource
        });
      });
    },
    onBeforeEventRender: args => {
      if (!args.data.backColor) {
        args.data.backColor = "#93c47d";
      }
      args.data.borderColor = "darker";
      args.data.fontColor = "white";

      args.data.areas = [];
      if (args.data.locked) {
        args.data.areas.push(
          {
            right: 4,
            top: 8,
            height: 18,
            width: 18,
            symbol: "icons/daypilot.svg#padlock",
            fontColor: "white"
          }
        );
      } else if (args.data.plus) {
        args.data.areas.push(
          {
            right: 4,
            top: 8,
            height: 18,
            width: 18,
            symbol: "icons/daypilot.svg#plus-4",
            fontColor: "white"
          }
        );
      }
    },
  });

  const schedulerRef = useRef();

  const getScheduler = () => schedulerRef.current.control;

  const zoomChange = (args) => {
    switch (args.level) {
      case "month":
        setConfig({
          ...config,
          startDate: DayPilot.Date.today().firstDayOfMonth(),
          days: DayPilot.Date.today().daysInMonth(),
          scale: "Day"
        });
        break;
      case "week":
        setConfig({
          ...config,
          startDate: DayPilot.Date.today().firstDayOfWeek(),
          days: 7,
          scale: "Day"
        });
        break;
      default:
        throw new Error("Invalid zoom level");
    }
  };

  const cellWidthChange = (ev) => {
    const checked = ev.target.checked;
    setConfig(prevConfig => ({
      ...prevConfig,
      cellWidthSpec: checked ? "Auto" : "Fixed"
    }));
  };

  const loadData = (args) => {
    const resources = [
      
        //name: "Convertible", id: "G2", expanded: true, children: [[
        
          {name: "John Doe", id: "A"},
          {name: "Jane Doe", id: "B"}, 
          {name: "Benjamin Smith", id: "C"},
          {name: "Emma Taylor", id: "D"},
          {name: "Hannah Thomas", id: "E"},
          {name: "Daniel Wilson", id: "F"},
          {name: "Freya Clark", id: "G"},
          {name: "Gordon Francis", id: "H"},
    ];

    const events = [
      {id: 101, text: "Masantha", start: "2024-03-16T00:00:00", end: "2024-03-25T00:00:00", resource: "A"},
      {
        id: 102,
        text: "Edward", 
        start: "2024-03-19T00:00:00", 
        end: "2024-03-23T00:00:00", 
        resource: "B",
        backColor: "#FF0000",
    },
      {
        id: 103,
        text: "Alice",
        start: "2024-03-22T00:00:00",
        end: "2024-03-27T00:00:00",
        resource: "C",
        backColor: "#6fa8dc",
        locked: true
      },
      {
        id: 104,
        text: "Samantha",
        start: "2024-03-18T00:00:00",
        end: "2024-03-24T00:00:00",
        resource: "D",
        backColor: "#f6b26b",
        plus: true
      },
      {
        id: 105,
        text: "Clair",
        start: "2024-03-20T00:00:00",
        end: "2024-03-25T00:00:00",
        resource: "E",
        backColor: "#4cc640",
        plus: true
      },
      {
        id: 106,
        text: "Dean",
        start: "2024-03-15T00:00:00",
        end: "2024-03-28T00:00:00",
        resource: "F",
        backColor: "#FFC300",
        plus: true
      },
      {
        id: 160,
        text: "Dean",
        start: "2024-03-15T00:00:00",
        end: "2024-03-22T00:00:00",
        resource: "C",
        backColor: "#FFC300",
        plus: true
      },
      {
        id: 107,
        text: "Jean",
        start: "2024-03-17T00:00:00",
        end: "2024-03-26T00:00:00",
        resource: "G",
        backColor: "#900C3F",
        plus: true
      },
      {
        id: 108,
        text: "Viola",
        start: "2024-03-21T00:00:00",
        end: "2024-03-30T00:00:00",
        resource: "H",
        backColor: "#a121e1",
        plus: true
      },
      
    ];

    getScheduler().update({
      resources,
      events
    });
  }

  useEffect(() => {
    console.log('bludclart');
    loadData();
  }, []);



  
  const loadData2 = (args) => {
    const resources = [
      
        //name: "Convertible", id: "G2", expanded: true, children: [[
        
          {name: "John Doe", id: "A"},
          {name: "Jane Doe", id: "B"}, 
          {name: "Benjamin Smith", id: "C"},
          {name: "Emma Taylor", id: "D"},
          {name: "Hannah Thomas", id: "E"},
          {name: "Daniel Wilson", id: "F"},
          {name: "Freya Clark", id: "G"},
          {name: "Gordon Francis", id: "H"},
    ];

    const events = [
      {id: 101, text: "Masantha", start: "2024-03-16T00:00:00", end: "2024-03-25T00:00:00", resource: "B"},
      {
        id: 102,
        text: "Edward", 
        start: "2024-03-16T00:00:00", 
        end: "2024-03-20T00:00:00", 
        resource: "A",
        backColor: "#FF0000",
    },
    {
      id: 110,
      text: "Alice", 
      start: "2024-03-20T00:00:00", 
      end: "2024-03-23T00:00:00", 
      resource: "A",
      backColor: "#6fa8dc",
  },
      {
        id: 103,
        text: "Alice",
        start: "2024-03-22T00:00:00",
        end: "2024-03-27T00:00:00",
        resource: "C",
        backColor: "#6fa8dc",
        locked: true
      },
      {
        id: 104,
        text: "Samantha",
        start: "2024-03-18T00:00:00",
        end: "2024-03-24T00:00:00",
        resource: "D",
        backColor: "#f6b26b",
        plus: true
      },
      {
        id: 105,
        text: "Clair",
        start: "2024-03-20T00:00:00",
        end: "2024-03-25T00:00:00",
        resource: "E",
        backColor: "#4cc640",
        plus: true
      },
      {
        id: 150,
        text: "Clair",
        start: "2024-03-17T00:00:00",
        end: "2024-03-21T00:00:00",
        resource: "H",
        backColor: "#4cc640",
        plus: true
      },
      {
        id: 106,
        text: "Dean",
        start: "2024-03-15T00:00:00",
        end: "2024-03-28T00:00:00",
        resource: "G",
        backColor: "#FFC300",
        plus: true
      },
      {
        id: 107,
        text: "Jean",
        start: "2024-03-17T00:00:00",
        end: "2024-03-26T00:00:00",
        resource: "F",
        backColor: "#900C3F",
        plus: true
      },
      {
        id: 108,
        text: "Viola",
        start: "2024-03-21T00:00:00",
        end: "2024-03-30T00:00:00",
        resource: "H",
        backColor: "#a121e1",
        plus: true
      },
      
    ];

    getScheduler().update({
      resources,
      events
    });
  }
  
  
  const boxStyle = {
    width: '80px',
    height: '30px',
    backgroundColor: 'lightblue', // Change to the desired background color
    border: '0.5px solid blue' // Change to the desired border color and width
  };
  var clicked = false;
  const triggerOnTimeRangeSelected = () => {
    if (!clicked){
    loadData2();
    setIsButtonVisible(true);
    console.log('clicked is '+clicked);
    clicked = true;
  }
  else{
    console.log('clicked is ' + clicked);
    window.alert('AI scheduler has already optimised');
  }
};
  const hideAgain = () =>{
    setIsButtonVisible(false);
  }


  return (
    <div>
        
       <Button onClick={triggerOnTimeRangeSelected} style={boxStyle}>Optimise</Button>
      
       {isButtonVisible && <Button onClick = {hideAgain}>Save</Button>}
      <div className="toolbar">
        <Zoom onChange={args => zoomChange(args)}/>
        {/* <button onClick={ev => getScheduler().message("Welcome!")}>Welcome!</button> */}
        <span className="toolbar-item"><label><input type="checkbox" checked={config.cellWidthSpec === "Auto"}
                                                     onChange={ev => cellWidthChange(ev)}/> Auto width</label></span>
      </div>
      <DayPilotScheduler
        {...config}
        ref={schedulerRef}
      />
    </div>
  );
}

export default Scheduler;
