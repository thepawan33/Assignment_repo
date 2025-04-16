import IndicesContainer from "./IndicesContainer";
import { globalIndices } from "../../utils/indicesData";

import { useSelector } from "react-redux";

const Indices = () => {
  const ind_indice = useSelector((state) => state.stock.indianIndices);

  return (
    <div className="ml-3 mb-30  sm:pl-25 ">
      <div>
        <p className="text-[#1f2937] text-2xl font-semibold mt-5 mb-5">
          Indian Indices
        </p>
        <IndicesContainer indicesList={ind_indice} />
      </div>

      <div className="mt-20">
        <p className="text-[#1f2937] text-2xl font-semibold mt-3 mb-5">
          Global Indices
        </p>
        <IndicesContainer indicesList={globalIndices} />
      </div>
    </div>
  );
};

export default Indices;
