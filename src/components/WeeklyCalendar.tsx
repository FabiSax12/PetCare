// src/components/WeeklyCalendar.tsx
"use client";

import React, { useState, useMemo, useRef, useEffect } from "react"; // Importa React y hooks
import dayjs from "dayjs";
import "dayjs/locale/es";
import weekOfYear from "dayjs/plugin/weekOfYear";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isBetween from "dayjs/plugin/isBetween"; // Para comprobar si una cita está en el slot
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Appointment, MedicalAppointment, AestheticAppointment } from "../types";

// Configura dayjs
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
  // Nueva prop para controlar la altura del área desplazable
  calendarHeight?: string; // Ej: "600px", "70vh", "calc(100vh - 200px)"
}

// --- Componente de Barra de Navegación (Separado para claridad) ---
const CalendarNavBar = ({ currentDate, onNavigate }: { currentDate: dayjs.Dayjs; onNavigate: (dir: "prev" | "next") => void }) => {
  const dateRangeText = useMemo(() => {
    const startOfWeek = currentDate.startOf("week");
    const endOfWeek = currentDate.endOf("week");
    const startFormat = startOfWeek.format("D");
    const endFormat = endOfWeek.format("D [de] MMMM YYYY"); // Añadir año
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

// --- Componente Principal del Calendario ---
export const WeeklyCalendar = ({
  appointments = [],
  medicalAppointmentColor = "bg-blue-500",
  aestheticAppointmentColor = "bg-pink-500",
  defaultAppointmentColor = "bg-gray-500",
  getAppointmentSubtitle = (app) => app.type === 'medical' ? (app as MedicalAppointment).reason : (app as AestheticAppointment).service,
  onSelectAppointment,
  initialDate,
  calendarHeight = "calc(100vh - 150px)", // Altura por defecto para el scroll, ajustar según tu layout
}: WeeklyCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(initialDate ? dayjs(initialDate) : dayjs());
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Ref para el contenedor de scroll

  // --- Cálculos de Fecha ---
  const startOfWeek = useMemo(() => currentDate.startOf("week"), [currentDate]);
  const weekDays = useMemo(() => Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day")), [startOfWeek]);

  // --- Horas del Día ---
  const timeSlots = useMemo(() => {
    const slots = [];
    // Generar slots cada 30 minutos para más granularidad si se desea, o mantener cada hora
    for (let hour = 7; hour < 19; hour++) { // Rango de 7am a 6pm (termina antes de las 7pm)
      slots.push(dayjs().hour(hour).minute(0).second(0));
      // Descomentar para slots de 30 min:
      // slots.push(dayjs().hour(hour).minute(30).second(0));
    }
    return slots;
  }, []);

  // --- Navegación ---
  const navigateWeek = (direction: "prev" | "next") => {
    setCurrentDate((prev) => prev.add(direction === "next" ? 1 : -1, "week"));
  };

  // --- Obtener Citas para una Celda (Día/Hora) ---
  // Esta función ahora necesita encontrar citas que *ocurran durante* este slot
  const getAppointmentsForSlot = (day: dayjs.Dayjs, time: dayjs.Dayjs) => {
    if (!Array.isArray(appointments)) return [];
    const slotStart = time;
    // Asumir slots de 1 hora por ahora, ajustar si usas 30 min
    const slotEnd = time.add(1, 'hour');

    return appointments.filter((app) => {
      if (!app || !app.start || !app.end) return false;
      const appStart = dayjs(app.start);
      const appEnd = dayjs(app.end);

      // Comprobar si la cita se solapa con el slot de tiempo actual en el día correcto
      return appStart.isSame(day, "day") && // Mismo día
             (appStart.isBefore(slotEnd) && appEnd.isAfter(slotStart)); // Solapamiento de tiempo
    });
  };

 // --- Calcular Estilo de Cita (Posición y Altura Relativa al Día) ---
 const calculateAppointmentStyle = (appointment: Appointment, dayStartTime: dayjs.Dayjs, totalDayHeightPx: number, hourHeightPx: number) => {
    if (!appointment || !appointment.start || !appointment.end) {
      return { top: 0, height: hourHeightPx, display: 'none' };
    }

    const startOfDay = dayStartTime.startOf('day'); // Referencia: inicio del día
    const appStart = dayjs(appointment.start);
    const appEnd = dayjs(appointment.end);

    // Calcular minutos desde el inicio del día visible (ej: 7am)
    const minutesFromDayStart = appStart.diff(startOfDay.hour(7), 'minute'); // Ajustar hora de inicio si cambia
    const durationMinutes = appEnd.diff(appStart, "minute");

    // Calcular posición top y altura en píxeles
    // Asumiendo que cada hora tiene hourHeightPx
    const pixelsPerMinute = hourHeightPx / 60;
    const topPx = minutesFromDayStart * pixelsPerMinute;
    const heightPx = Math.max(durationMinutes * pixelsPerMinute, 20); // Altura mínima

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

  const hourHeightPx = 64; // Corresponde a h-16 de Tailwind. ¡Asegúrate que coincida!
  const totalDayHeightPx = timeSlots.length * hourHeightPx; // Altura total de la columna de un día
return (
  // Contenedor principal del componente
  <div className="flex flex-col fixed bottom-8 top-25 right-13 left-35 bg-white rounded-lg shadow-md border border-gray-200 ">

    {/* 1. Barra de Navegación */}
    <CalendarNavBar currentDate={currentDate} onNavigate={navigateWeek} />

    {/* 2. Encabezado de Días (Una sola fila, 7 columnas) */}
    <div className="padding-2 bg-gray-100 flex items-center border-b border-gray-200 height-16">
      <div className="sticky left-0 top-0 font-semibold z-10 border-r border-gray-200 min-w-[60px] md:min-w-[80px]">Hora</div>
      {/* Nombres de los días */}
      {weekDays.map((day) => (
        <div
          key={day.format("YYYY-MM-DD-header")}
          className="flex-1 text-justify-center items-center font-semibold text-sm capitalize border-r border-gray-200 p-2"
        >
          {day.format("dddd")}
        </div>
      ))}
    </div>

    {/* 3. Contenedor Principal del Cuerpo (Este tendrá el scroll INTERNO) */}
    <div
      ref={scrollContainerRef}
      className="overflow-y-auto relative"
      style={{ height: calendarHeight }} // ALTURA FIJA
    >
      {/* Contenedor Flex para alinear la Columna de Horas y Grid de Días */}
      <div className="flex">

        {/* 3.1 Columna de Horas (Sticky a la izquierda) */}
        <div className="sticky left-0 top-0 bg-white z-10 border-r border-gray-200 min-w-[60px] md:min-w-[80px]">
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
        <div className="flex-grow grid grid-cols-7">
          {weekDays.map((day) => (
            <div
              key={day.format("YYYY-MM-DD-col")}
              className="relative border-r border-gray-200 last:border-r-0"
              style={{ height: `${totalDayHeightPx}px` }}
            >
              {/* Líneas Horizontales de Hora */}
              {timeSlots.map((_, index) => (
                <div
                  key={`line-${day.format("YYYY-MM-DD")}-${index}`}
                  className="border-b border-gray-100"
                  style={{ height: `${hourHeightPx}px` }}
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
                      style={{ top, height }}
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
