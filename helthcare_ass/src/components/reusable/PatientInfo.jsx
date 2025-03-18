export default function PatientInfo({ heading, name, id }) {
  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h4 className="text-sm text-blue-600 mb-1">{heading}</h4>
      <p className="text-lg font-medium text-gray-800">{name}</p>
      <p className="text-sm text-gray-600"> {id}</p>
    </div>
  );
}
