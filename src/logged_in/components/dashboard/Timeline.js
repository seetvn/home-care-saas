import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";
import { RESOURCES } from "./resources";

function Timeline() {
    return (
      <Scheduler
        view="week"
        month={
          {
          weekDays: [0, 1, 2, 3, 4, 5, 6], 
          weekStartOn: 1, 
          startHour: 8, 
          endHour: 20,
          navigation: true,
          disableGoToDay: false
          }
        }
        week={
          {
          weekDays: [0, 1, 2, 3, 4, 5, 6], 
          weekStartOn: 1, 
          startHour: 8, 
          endHour: 20,
          navigation: true,
          disableGoToDay: false
          }
        }
        day={
          {
          weekDays: [0, 1, 2, 3, 4, 5, 6], 
          weekStartOn: 1, 
          startHour: 8, 
          endHour: 20,
          navigation: true,
          disableGoToDay: false
          }
        }
        events={EVENTS}
        resources={RESOURCES}
        resourceFields={{
            idField: "admin_id",
            textField: "title",
            subTextField: "mobile",
            avatarField: "title",
            colorField: "color"
        }}
        fields={[
            {
              name: "admin_id",
              type: "select",
              default: RESOURCES[0].admin_id,
              options: RESOURCES.map((res) => {
                return {
                  id: res.admin_id,
                  text: `${res.title} (${res.mobile})`,
                  value: res.admin_id //Should match "name" property
                };
              }),
              config: { label: "Assignee", required: true }
            }
          ]}
        // selectedDate={new Date(2024, 2, 24)} // Note: months are zero-based, so March is represented by 2      
        />
    );
  }

export default Timeline;