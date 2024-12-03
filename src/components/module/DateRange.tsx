"use client";
import { useState } from "react";
import Select from "../core/Select/Select";
import Calendar from "../core/Calendar/Calendar";
import Button from "../core/Button/Button";

export default function DateRange() {
  const [selectedValue, setSelectedValue] = useState<string | number>("custom range");
  const [range, setRange] = useState({ startDate: new Date(), endDate: new Date() });

  const options = [
    { key: "today", value: "Today" },
    { key: "yesterday", value: "Yesterday" },
    { key: "7 days", value: "Last 7 Days" },
    { key: "30 Days", value: "Last 30 Days" },
    { key: "this month", value: "This Month" },
    { key: "last month", value: "Last Month" },
    { key: "custom range", value: "Custom Range" },
  ];

  const handleChange = (selectedKey: string | number) => {
    setSelectedValue(selectedKey);
  };

  const handleDateChange = (value: { startDate: Date; endDate: Date }) => {
    setRange(value);
  };

  const formatDate = (date: Date) => {
    return date.toISOString().slice(0, 10);
  };

  return (
    <>
      <div className="flex md::items-end md:justify-end items-center justify-center md:px-10 px-0 md:mt-20 mt-10">
        <div className="md:w-96 w-72">
          <Select options={options} value={selectedValue} onChange={handleChange} customClassName="max-w-md" />
        </div>
      </div>
      <div className=" md:mt-10 mt-5 flex items-center justify-center">
        {selectedValue === "custom range" ? (
          <div className="md:border dark:bg-white">
            <Calendar dateRange={range} onChange={handleDateChange} />
            <div className="flex flex-col sm:flex-row md:items-center items-end justify-end gap-2 py-2 px-4 right-0">
              <p className="text-white dark:text-black text-right sm:text-left">
                {formatDate(range.startDate)} - {formatDate(range.endDate)}
              </p>
              <div className="flex gap-2 mt-2 sm:mt-0 sm:flex-row sm:items-center sm:justify-end">
                <Button label="Cancel" variant="secondary" />
                <Button label="Apply" variant="primary" />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-semibold dark:text-white">Content coming soon...</h1>
          </div>
        )}
      </div>
    </>
  );
}
