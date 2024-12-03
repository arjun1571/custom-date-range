import React, { FC, useState, useEffect } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Button from "../Button/Button";

interface CalendarProps {
  dateRange?: { startDate: Date; endDate: Date };
  onChange: (value: { startDate: Date; endDate: Date }) => void;
}

const Calendar: FC<CalendarProps> = ({ dateRange = { startDate: new Date(), endDate: new Date() }, onChange }) => {
  const [range, setRange] = useState({
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
    key: "selection",
  });

  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleRangeChange = (ranges: RangeKeyDict) => {
    if (ranges.selection && ranges.selection.startDate && ranges.selection.endDate) {
      let { startDate, endDate } = ranges.selection;

      const IST_OFFSET = 5.5 * 60 * 60 * 1000;

      startDate = new Date(startDate.getTime() + IST_OFFSET);
      startDate.setHours(0, 0, 0, 0);

      endDate = new Date(endDate.getTime() + IST_OFFSET);
      endDate.setHours(23, 59, 59, 999);

      if (startDate > endDate) {
        [startDate, endDate] = [endDate, startDate];
      }

      setRange({ startDate, endDate, key: "selection" });
      onChange({ startDate, endDate });
      setModalOpen(false);
    }
  };

  const customRanges = [
    {
      label: "Today",
      range: {
        startDate: new Date(),
        endDate: new Date(),
      },
    },
    {
      label: "Yesterday",
      range: {
        startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
        endDate: new Date(new Date().setDate(new Date().getDate() - 1)),
      },
    },
    {
      label: "Last 7 Days",
      range: {
        startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
        endDate: new Date(),
      },
    },
    {
      label: "Last 30 Days",
      range: {
        startDate: new Date(new Date().setDate(new Date().getDate() - 30)),
        endDate: new Date(),
      },
    },
    {
      label: "This Month",
      range: {
        startDate: new Date(new Date().setDate(1)),
        endDate: new Date(),
      },
    },
    {
      label: "Last Month",
      range: {
        startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        endDate: new Date(new Date().setDate(0)),
      },
    },
    {
      label: "Custom Range",
      range: {
        startDate: new Date(),
        endDate: new Date(),
      },
    },
  ];

  return (
    <div className="calendar-container md:flex gap-1">
      {isMobile && (
        <div>
          <Button label="Select Date Range" variant="primary" onClick={() => setModalOpen(true)} className="mb-2" />

          {modalOpen && (
            <div
              className="modal"
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#fff",
                padding: "20px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                zIndex: 1000,
                borderRadius: "8px",
                width: "80%",
                maxWidth: "400px",
              }}
            >
              <button
                onClick={() => setModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "transparent",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ✖
              </button>
              <h3>Select Date Range</h3>
              {customRanges.map((rangeOption) => (
                <div
                  key={rangeOption.label}
                  onClick={() => {
                    handleRangeChange({ selection: rangeOption.range });
                    setSelectedLabel(rangeOption.label);
                  }}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    borderRadius: "5px",
                    marginBottom: "10px",
                    background: selectedLabel === rangeOption.label ? "#0d6efd" : "",
                    color: selectedLabel === rangeOption.label ? "white" : "",
                  }}
                >
                  {rangeOption.label}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {!isMobile && (
        <div className="lg:border px-10">
          {customRanges.map((rangeOption) => (
            <div
              key={rangeOption.label}
              onClick={() => {
                handleRangeChange({ selection: rangeOption.range });
                setSelectedLabel(rangeOption.label);
              }}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderRadius: "5px",
                marginBottom: "10px",
                background: selectedLabel === rangeOption.label ? "#0d6efd" : "",
                color: selectedLabel === rangeOption.label ? "white" : "",
              }}
            >
              {rangeOption.label}
            </div>
          ))}
        </div>
      )}

      <DateRange
        ranges={[range]}
        onChange={handleRangeChange}
        months={isMobile ? 1 : 2}
        direction="horizontal"
        preventSnapRefocus
        initialFocusedRange={[0, 0]}
        minDate={new Date("2020-01-01")}
        maxDate={new Date("2025-12-31")}
      />
    </div>
  );
};

export default Calendar;
