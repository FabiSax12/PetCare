"use client";

import { useState, useMemo, useRef } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";
import weekOfYear from "dayjs/plugin/weekOfYear";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isBetween from "dayjs/plugin/isBetween";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Appointment, MedicalAppointment, AestheticAppointment } from "../types";

dayjs.extend(weekOfYear);
dayjs.extend(localizedFormat);
dayjs.extend(isBetween);
dayjs.locale("es");

interface WeeklyCalendarProps {
  appointments: Appointment[];
  medicalAppointmentColor?: string;
  aestheticAppointmentColor?: string;
  defaultAppointmentColor?: string;
  getAppointmentSubtitle?: (appointment: Appointment) => string;
  onSelectAppointment?: (appointment: Appointment) => void;
  initialDate?: Date | string;
  calendarHeight?: string;
}


const CalendarNavBar = ({ currentDate, onNavigate }: { currentDate: dayjs.Dayjs; onNavigate: (dir: "prev" | "next") => void }) => {
  const dateRangeText = useMemo(() => {
    const startOfWeek = currentDate.startOf("week");
    const endOfWeek = currentDate.endOf("week");
    const startFormat = startOfWeek.format("D");
    const endFormat = endOfWeek.format("D [de] MMMM YYYY");
    return `${startFormat} - ${endFormat}`;
  }, [currentDate]);

  return (
    <div className="bg-gray-800 text-white p-2 flex items-center justify-between rounded-t-lg">
      <button
        onClick={() => onNavigate("prev")}
        className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-150"
        aria-label="Semana anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <span className="font-medium text-sm text-center">{dateRangeText}</span>
      <button
        onClick={() => onNavigate("next")}
        className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-150"
        aria-label="Semana siguiente"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};


export const WeeklyCalendar = ({
  appointments = [],
  medicalAppointmentColor = "bg-blue-500",
  aestheticAppointmentColor = "bg-pink-500",
  defaultAppointmentColor = "bg-gray-500",
  getAppointmentSubtitle = (app) => app.type === 'medical' ? (app as MedicalAppointment).reason : (app as AestheticAppointment).service,
  onSelectAppointment,
  initialDate,
  calendarHeight = "calc(100vh - 150px)",
}: WeeklyCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(initialDate ? dayjs(initialDate) : dayjs());
  const scrollContainerRef = useRef<HTMLDivElement>(null);


  const startOfWeek = useMemo(() => currentDate.startOf("week"), [currentDate]);
  const weekDays = useMemo(() => Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day")), [startOfWeek]);


  const timeSlots = useMemo(() => {
    const slots = [];

    for (let hour = 7; hour < 19; hour++) {
      slots.push(dayjs().hour(hour).minute(0).second(0));
    }
    return slots;
  }, []);


  const navigateWeek = (direction: "prev" | "next") => {
    setCurrentDate((prev) => prev.add(direction === "next" ? 1 : -1, "week"));
  };

  const calculateAppointmentStyle = (appointment: Appointment, dayStartTime: dayjs.Dayjs, totalDayHeightPx: number, hourHeightPx: number) => {
    console.log(totalDayHeightPx)
    if (!appointment || !appointment.start || !appointment.end) {
      return { top: 0, height: hourHeightPx, display: 'none', innerWidth: widthValue };
    }

    const startOfDay = dayStartTime.startOf('day');
    const appStart = dayjs(appointment.start);
    const appEnd = dayjs(appointment.end);


    const minutesFromDayStart = appStart.diff(startOfDay.hour(7), 'minute');
    const durationMinutes = appEnd.diff(appStart, "minute");


    const pixelsPerMinute = hourHeightPx / 60;
    const topPx = minutesFromDayStart * pixelsPerMinute;
    const heightPx = Math.max(durationMinutes * pixelsPerMinute, 20);
    let backgroundColorClass = defaultAppointmentColor;
    if (appointment.type === 'medical') {
      backgroundColorClass = medicalAppointmentColor;
    } else if (appointment.type === 'aesthetic') {
      backgroundColorClass = aestheticAppointmentColor;
    }

    return {
      top: `${topPx}px`,
      height: `${heightPx}px`,
      backgroundColorClass: backgroundColorClass,
    };
  };
  const widthValue = 108;
  const hourHeightPx = 64;
  const totalDayHeightPx = timeSlots.length * hourHeightPx;
  return (

    <div className="flex flex-col fixed bottom-8 top-25 right-13 left-35 bg-white rounded-lg shadow-md border border-gray-200 " style={{ height: `${totalDayHeightPx}px` }}>

      {/* 1. Barra de Navegación */}
      <CalendarNavBar currentDate={currentDate} onNavigate={navigateWeek} />

      {/* 2. Encabezado de Días (Una sola fila, 7 columnas) */}
      <div className="padding-2 bg-gray-100 flex items-center border-b border-gray-200 height-16 text-center" >
        {/* Columna de Hora (Sticky a la izquierda) */}
        <div className="sticky left-0 top-0 font-semibold z-10 border-r border-gray-200 min-w-[60px] md:min-w-[80px]" >Hora</div>
        {/* Nombres de los días */}
        {weekDays.map((day) => (
          <div
            key={day.format("YYYY-MM-DD-header")}
            className="flex-1 text-justify-center items-center font-semibold text-sm capitalize border-r border-gray-200 p-2"

          >
            {day.format("dddd")}
          </div>
        ))} {/* fin nombres días */}
      </div>

      {/* 3. Contenedor Principal del Cuerpo (Este tendrá el scroll INTERNO) */}
      <div
        ref={scrollContainerRef}
        className="overflow-y-auto"
        style={{ height: calendarHeight }} // ALTURA FIJA
      >

        {/* Contenedor Flex para alinear la Columna de Horas y Grid de Días */}
        <div className="flex" style={{ background: "g", height: calendarHeight }}>

          {/* 3.1 Columna de Horas (Sticky a la izquierda) */}
          <div className=" bg-white z-10 border-r border-gray-200 min-w-[60px] md:min-w-[80px] text-center">
            <div style={{ height: `${totalDayHeightPx}px` }}>
              {timeSlots.map((time) => (
                <div
                  key={time.format("HH:mm")}
                  className="flex items-center justify-end h-full pr-2 text-xs text-gray-500 border-b border-gray-100"
                  style={{ height: `${hourHeightPx}px` }}
                >
                  {time.format("h:mm a")}
                </div>
              ))}
            </div>
          </div>

          {/* 3.2 Grid de Días y Citas */}
          <div className=" bg-gray-100 flex items-center border-b border-gray-200 height-16 text-center" style={{ height: `${totalDayHeightPx}px`, width: '100%' }}>
            {weekDays.map((day) => (
              <div
                key={day.format("YYYY-MM-DD-col")}
                className="relative border-r top-0 border-gray-200 last:border-r-0"
                style={{ height: `${totalDayHeightPx}px`, width: '100%' }}
              >
                {/* Líneas Horizontales de Hora */}
                {timeSlots.map((index) => (
                  <div
                    key={`line-${day.format("YYYY-MM-DD")}-${index}`}
                    className=" border-b"
                    style={{ borderRight: '1px solid black', height: `${hourHeightPx}px`, width: 'auto' }}
                  ></div>
                ))}

                {/* Renderizar Citas */}
                {appointments
                  .filter(app => dayjs(app.start).isSame(day, 'day'))
                  .map((appointment) => {
                    const { top, height, backgroundColorClass } = calculateAppointmentStyle(
                      appointment,
                      day,
                      totalDayHeightPx,
                      hourHeightPx
                    );
                    const titleParts = appointment.title?.split(" - ") || [];
                    const displayTitle = titleParts.length > 1 ? titleParts[1] : appointment.title || "Cita";

                    return (
                      <div
                        key={appointment.id}
                        onClick={() => onSelectAppointment?.(appointment)}
                        className={`absolute left-1 right-1 rounded p-1 text-white text-[10px] leading-tight cursor-pointer overflow-hidden ${backgroundColorClass} z-20`}
                        style={{ top, height, margin: "5px", opacity: 0.8 }}
                        title={appointment.title}
                      >
                        <div className="font-semibold truncate">{displayTitle}</div>
                        <div className="truncate">{getAppointmentSubtitle(appointment)}</div>
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );

};
