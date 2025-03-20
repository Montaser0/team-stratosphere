
import { useState } from "react";
import { calendarEvents } from "@/data/mockData";
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight,
  Plus
} from "lucide-react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState(calendarEvents);

  // Helper functions
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Format date as YYYY-MM-DD
  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  // Check if a date has events
  const hasEvents = (date: Date) => {
    const dateStr = formatDate(date);
    return events.some(
      (event) => formatDate(new Date(event.start)) === dateStr
    );
  };

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    const dateStr = formatDate(date);
    return events.filter(
      (event) => formatDate(new Date(event.start)) === dateStr
    );
  };

  // Format time from Date object (HH:MM)
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Generate calendar days
  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-border/50"></div>);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = new Date().toDateString() === date.toDateString();
      const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
      const hasEventsOnDay = hasEvents(date);
      
      days.push(
        <div 
          key={day} 
          className={`h-24 border border-border/50 p-1 hover:bg-accent/50 cursor-pointer transition-colors relative ${
            isToday ? "bg-primary/5" : ""
          } ${isSelected ? "ring-2 ring-primary" : ""}`}
          onClick={() => setSelectedDate(date)}
        >
          <div className="flex justify-between">
            <span className={`text-sm font-medium ${isToday ? "text-primary" : ""}`}>
              {day}
            </span>
            {hasEventsOnDay && (
              <span className="h-2 w-2 rounded-full bg-primary"></span>
            )}
          </div>
          
          <div className="mt-1 space-y-1 overflow-hidden max-h-[60px]">
            {getEventsForDate(date).slice(0, 2).map((event, index) => (
              <div 
                key={index} 
                className="text-xs px-1 py-0.5 rounded bg-primary/10 text-primary truncate"
              >
                {event.title}
              </div>
            ))}
            {getEventsForDate(date).length > 2 && (
              <div className="text-xs text-muted-foreground">
                +{getEventsForDate(date).length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }
    
    return days;
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="page-transition">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="text-muted-foreground mt-1">Schedule and manage your events</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-card rounded-xl border animate-scaleIn">
          <div className="p-4 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={prevMonth}
                className="p-1 rounded-md hover:bg-accent"
              >
                <ChevronLeft size={20} />
              </button>
              <h2 className="text-xl font-semibold">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button
                onClick={nextMonth}
                className="p-1 rounded-md hover:bg-accent"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md flex items-center gap-1.5 text-sm">
              <Plus size={16} />
              <span>Add Event</span>
            </button>
          </div>

          <div className="grid grid-cols-7 bg-muted/50">
            {dayNames.map((day) => (
              <div key={day} className="py-2 text-center font-medium text-sm">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {renderCalendarDays()}
          </div>
        </div>

        <div className="bg-card rounded-xl border animate-scaleIn">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <CalendarIcon size={18} />
              <h2 className="font-semibold">
                {selectedDate
                  ? selectedDate.toLocaleDateString(undefined, {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Select a day"}
              </h2>
            </div>
          </div>

          <div className="p-4">
            {selectedDate ? (
              <>
                <h3 className="font-medium mb-2">Events</h3>
                {getEventsForDate(selectedDate).length > 0 ? (
                  <div className="space-y-3">
                    {getEventsForDate(selectedDate).map((event, index) => (
                      <div key={index} className="p-3 rounded-md border hover:bg-accent/50">
                        <h4 className="font-medium">{event.title}</h4>
                        <div className="text-sm text-muted-foreground mt-1">
                          {formatTime(new Date(event.start))} - {formatTime(new Date(event.end))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No events scheduled for this day.</p>
                )}
              </>
            ) : (
              <p className="text-muted-foreground">Select a day to view events.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
