import { QRCodeCanvas } from "qrcode.react";

const QRGen = ({ value }) => {
  return (
    <div className="p-4 bg-white rounded shadow w-fit">
      <QRCodeCanvas value={JSON.stringify(value)} size={60} level="L" />
    </div>
  );
};

export default QRGen;
