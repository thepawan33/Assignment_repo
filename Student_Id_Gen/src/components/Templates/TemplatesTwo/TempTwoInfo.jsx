const TempTwoInfo = ({ info }) => {
  return (
    <div className="flex flex-col flex-wrap gap-1.5">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-[#422b1f] text-lg font-bold">Roll Num</p>
          <p className="text-[#422b1f] font-medium">
            {info?.roll_num || "12548"}
          </p>
        </div>
        <div className="ml-12">
          <p className="text-[#422b1f] text-lg font-bold">Class</p>
          <p className="text-[#422b1f] font-medium">{info?.class || "2-A"}</p>
        </div>
      </div>

      <div className=" flex flex-row justify-between">
        <div>
          <p className="text-[#422b1f] text-lg font-bold">Rack </p>
          <p className="text-[#422b1f] font-medium">
            {info?.rack_num || "R-2563"}
          </p>
        </div>
        <div>
          <p className="text-[#422b1f] text-lg font-bold">Bus</p>
          <p className="text-[#422b1f] font-medium">
            {info?.bus_route || "Bus-25"}
          </p>
        </div>
      </div>

      <div>
        <p className="text-[#422b1f] text-xl font-bold">Allergies </p>
        <p className="text-[#422b1f] font-medium">
          {...info?.allergy || "None"}
        </p>
      </div>
    </div>
  );
};

export default TempTwoInfo;
