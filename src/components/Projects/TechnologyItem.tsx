import type { Technology } from "@/interfaces/projectInterface";

export default function TechnologyItem({ data }: { data: Technology }) {
  return (
    <div
      className={`group p-1 flex justify-center items-center border rounded-lg cursor-pointer select-none
                hover:translate-y-2  
                transition-all duration-150 [box-shadow:3px_3px_0_0_#000000] relative`}
    >
      <p className="bg-gray-800 text-white absolute top-0 opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 transition-all z-50 border px-3 rounded-md">
        {data.name}
      </p>
      <img className="w-7 aspect-square" src={data.image} alt={data.name} />
    </div>
  );
}
