import DropDown from "./reusable/DropDown";

import { busRoutes, classOptions, allergyOptions } from "../utils/rawData";
import MultiSelector from "./reusable/MultiSelector";

export default function DropDownContainer() {
  return (
    <div>
      <DropDown
        name={"class"}
        label={"Class & Division"}
        menuItem={classOptions}
      />
      <DropDown
        name={"bus_route"}
        label={"Bus Route Number"}
        menuItem={busRoutes}
      />
      <MultiSelector
        label={"Allergy"}
        name={"allergy"}
        menuItem={allergyOptions}
      />
    </div>
  );
}
