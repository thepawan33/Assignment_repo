import { useSelector } from "react-redux";

const TempInfo = () => {
  const info = useSelector((state) => state.form.idData);

  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="text-[#1c1c66] font-bold">Name</p>
        <p className="text-black text-base font-medium break-words">
          {info?.name || "Daniel Gallego"}
        </p>
      </div>

      <div className="flex justify-between gap-4">
        <div>
          <p className="text-[#1c1c66] font-bold">Roll Number</p>
          <p className="text-black text-base font-medium">
            {info?.roll_num || "12547"}
          </p>
        </div>
        <div className="ml-9">
          <p className="text-[#1c1c66] font-bold">Rack</p>
          <p className="text-black text-base font-medium">
            {info?.rack_num || "R-215"}
          </p>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <div>
          <p className="text-[#1c1c66] font-bold">Class</p>
          <p className="text-black text-base font-medium">
            {info?.class || "2-A"}
          </p>
        </div>
        <div>
          <p className="text-[#1c1c66] font-bold ">Bus</p>
          <p className="text-black text-base font-medium">
            {info?.bus_route || "Bus-25"}
          </p>
        </div>
      </div>

      <div>
        <p className="text-[#1c1c66] font-bold">Allergies</p>
        <p className="text-black text-base font-medium break-words">
          {...info?.allergy || "None"}
        </p>
      </div>
    </div>
  );
};

export default TempInfo;
