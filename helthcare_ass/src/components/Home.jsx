import React from "react";
import ImgSlider from "./reusable/ImgSlider";
import PatientInfo from "./reusable/PatientInfo";

import ReportCollection from "./ReportCollection";

const Home = () => {
  return (
    <div className="h-screen bg-blue-50 flex flex-col md:flex-row">
      <aside className="w-full md:w-1/3 bg-white p-6 shadow-lg border-r border-blue-100 lg:overflow-auto">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Patient Summary
        </h2>

        <div className="space-y-5">
          <PatientInfo
            heading={"Patient"}
            name={"Donald Trump"}
            id={"ID:#P123456"}
          />
          <PatientInfo heading={"Diagnosis"} name={"Sickle Cell Anemia"} />

          <div className="p-4 bg-blue-100 rounded-lg">
            <h4 className="text-sm text-blue-600 mb-2">Reports</h4>
            <ReportCollection />
          </div>
        </div>
      </aside>

      <main className="flex-1 p-6 bg-blue-100 flex flex-col items-center justify-start  ">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">
          Whole Slide Image Viewer
        </h2>

        <div className="w-full h-[75vh] bg-white border border-blue-200 rounded-xl shadow-inner flex items-center justify-center">
          <ImgSlider />
        </div>
      </main>
    </div>
  );
};

export default Home;
