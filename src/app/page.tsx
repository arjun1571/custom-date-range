import DateRange from "@/components/module/DateRange";

export default function Home() {
  return (
    <div className="h-screen flex flex-col ">
      <div className="h-full w-full bg-diagonal">
        <div className="">
          <DateRange />
        </div>
      </div>
    </div>
  );
}
