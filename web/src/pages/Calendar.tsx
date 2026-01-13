import MainNavbar from "../components/layout/MainNavbar";
import MainTopbar from "../components/layout/MainTopbar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      <MainNavbar />
      <div className="w-full flex flex-col ml-0 lg:ml-56">
        <MainTopbar />
        <main className="p-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Calendar</h1>
            <p className="text-gray-500">Manage your calendar and events</p>
          </div>
          <div className="mt-4">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              height="80vh"
              events={[
                { title: "event 1", date: "2026-04-01" },
                { title: "event 2", date: "2026-04-02" },
              ]}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Calendar;
