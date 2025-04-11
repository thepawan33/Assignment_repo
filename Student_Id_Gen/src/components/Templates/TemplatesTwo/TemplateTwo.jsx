import TempTwoInfo from "./TempTwoInfo";
import { useSelector } from "react-redux";

import QRGen from "../../reusable/QRGen";

const TemplateTwo = () => {
  const info = useSelector((state) => state.form.idData);

  return (
    <div className="w-[650px] h-[400px] relative bg-[url('/assets/template_2.png')] bg-cover bg-center bg-no-repeat">
      <div>
        <span className="text-3xl text-[#fff] font-bold absolute top-[2%] left-[2%]">
          Ingoude Academy
        </span>
        <span className="text-sm text-[#1e1e1e]/70 font-bold absolute top-[12%] left-[2%]">
          123 Anywhere St., Any City, ST 12345
        </span>
      </div>
      <span className="text-4xl text-[#f47c87] font-bold absolute top-[2%] left-[52%]">
        {info?.name || "Daniel Gallego"}
      </span>

      <img
        src={info?.imageUrl || "https://randomuser.me/api/portraits/men/75.jpg"}
        alt="img"
        className="h-[200px] absolute top-[20%] left-[5%] rounded-[50%] "
      />
      <div className="absolute top-[28%] left-[50%]">
        <TempTwoInfo info={info} />
      </div>
      <div className="  absolute bottom-[2%] right-[2%]">
        <QRGen value={{ ...info, imageUrl: "image url" }} />
      </div>
    </div>
  );
};

export default TemplateTwo;
