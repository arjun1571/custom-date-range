"use client";
import { useState } from "react";
import Select from "../core/Select/Select";

export default function DateRange() {
  const [selectedValue, setSelectedValue] = useState<string | number>("custom range");

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
  return (
    <>
      <div className="flex items-end justify-end px-10 mt-20">
        <div className=" w-96">
          <Select options={options} value={selectedValue} onChange={handleChange} customClassName="max-w-md" />
        </div>
      </div>
      <div className="w-full">{selectedValue === "custom range" ? <div>hello</div> : <div></div>}</div>
    </>
  );
}
