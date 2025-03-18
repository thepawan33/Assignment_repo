import ReportTable from "./reusable/ReportTable";

import { rbcData, wbcData, plateletData } from "../utils/dataCollection";

export default function ReportCollection() {
  return (
    <div>
      <ReportTable headings={["RBC", "Count", "Percentage"]} datas={rbcData} />

      <ReportTable headings={["WBC", "Count", "Percentage"]} datas={wbcData} />
      <ReportTable
        headings={["Platelets", "Count", "Percentage"]}
        datas={plateletData}
      />
    </div>
  );
}
