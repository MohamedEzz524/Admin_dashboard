import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { List, ListItem, ListItemText } from "@mui/material";
import Header from "../../components/Header";
import { formatDate } from "@fullcalendar/core/index.js";
import { useMediaQuery } from "@mui/material";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  const inMobile = useMediaQuery("(max-width:640px)");

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <div className="m-5 flex flex-col gap-10 flex-1">
      {/* HEADER */}
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <div className="flex flex-col md:flex-row gap-2.5 justify-between ">
        {/* CALENDAR SIDEBAR */}
        <div className="flex-1 basis-1/5 rounded-sm bg-sidebar h-[75vh] p-4">
          <h5 className="h5 text-menu">Events</h5>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                className="my-2.5 rounded-[2px] bg-primary-accent"
                key={event.id}
              >
                <ListItemText
                  primary={<h5 className="h5 text-gray-50">{event.title}</h5>}
                  secondary={
                    <p className="text-sm text-gray-100">
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>

        {/* CALENDAR */}
        <div className="flex-1 basis-full  sm:ml-4 bg-sidebar rounded-sm text-menu">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={
              !inMobile && {
                style: "bg-primary-accent",
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }
            }
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2025-05-22",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2025-12-31",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
