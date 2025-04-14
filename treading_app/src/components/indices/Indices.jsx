import IndicesContainer from "./IndicesContainer";
import { indianIndices, globalIndices } from "../../utils/indicesData";

const Indices = () => {
  return (
    <div className="ml-3 mb-20">
      <div>
        <p className="text-[#1f2937] text-2xl font-semibold mt-3 mb-5">
          Indian Indices
        </p>
        <IndicesContainer indicesList={indianIndices} />
      </div>

      <div className="mt-10">
        <p className="text-[#1f2937] text-2xl font-semibold mt-3 mb-5">
          Global Indices
        </p>
        <IndicesContainer indicesList={globalIndices} />
      </div>
    </div>
  );
};

export default Indices;
