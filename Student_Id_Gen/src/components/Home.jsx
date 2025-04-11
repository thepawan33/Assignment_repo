import FormContainer from "./FormContainer";
import Preview from "./Preview";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-wrap flex-row justify-center bg-gradient-to-r from-gray-800 to-gray-600 text-white">
      <FormContainer />
      <Preview />
    </div>
  );
}
