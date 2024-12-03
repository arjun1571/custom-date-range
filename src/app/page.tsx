import DateRange from "@/components/module/DateRange";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-full w-full bg-diagonal">
        <div className="">
          <DateRange />
        </div>

        {/* <div className="z-50">
          <h1 className="text-4xl font-bold text-center my-10 z-10">Home Page Content</h1>
          <p className="text-center z-10">Scroll down to see the sticky navbar in action.</p>
          <h1 className="text-4xl font-bold text-center my-10 z-10">Home Page Content</h1>
          <p className="text-center z-10">Scroll down to see the sticky navbar in action.</p>
          <h1 className="text-4xl font-bold text-center my-10 z-10">Home Page Content</h1>
          <p className="text-center z-50 text-white">Scroll down to see the sticky navbar in action.</p>
        </div> */}
      </div>
    </div>
  );
}
