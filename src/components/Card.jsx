import { IoEllipsisVertical } from "react-icons/io5";

export default function Card({ item }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition w-full max-w-sm">
      
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-gray-800 text-base">
          {item.title}
        </h3>
        <IoEllipsisVertical className="text-gray-500 text-lg leading-none cursor-pointer" />
      </div>

      {/* Card Description */}
      <p className="text-gray-500 text-sm mt-3 leading-relaxed">
        {item.description}
      </p>

      <div className="border-t border-gray-200 mt-6"></div>

      {/* Card Footer */}
      <p className="text-xs text-gray-500 mt-3">
        Created On:{" "}
        <span className="font-medium text-gray-700">
          {item.date}
        </span>
      </p>
    </div>
  );
}