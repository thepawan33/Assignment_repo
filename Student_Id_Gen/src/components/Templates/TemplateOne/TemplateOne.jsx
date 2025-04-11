import QRGen from "../../reusable/QRGen";
import TempInfo from "./TempInfo";
import { useSelector } from "react-redux";

export default function TemplateOne() {
  const info = useSelector((state) => state.form.idData);

  return (
    <div className="w-[650px] h-[400px] relative bg-[url('/assets/template_1.png')] bg-cover bg-center bg-no-repeat">
      <span className="text-4xl text-[#1c1c66] font-bold absolute top-[10%] left-[18%]">
        Ingoude Academy
      </span>
      <span className="text-lg text-[black] absolute top-[20%] left-[18%]">
        123 Anywhere St., Any City, ST 12345
      </span>
      <img
        src={info?.imageUrl || "https://randomuser.me/api/portraits/men/75.jpg"}
        alt="img"
        className="h-[140px] rounded-[20%] absolute top-[33%] left-[10%]"
      />

      <div className=" absolute top-[69%] left-[12%]">
        <QRGen value={{ ...info, imageUrl: "image url" }} />
      </div>

      <div className="absolute top-[32%] left-[50%]">
        <TempInfo />
      </div>
    </div>
  );
}
