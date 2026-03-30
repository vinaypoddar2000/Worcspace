import { FiSearch, FiBell, FiCommand  } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  return (
    <div className="h-16 rounded-xl px-6 flex items-center justify-between bg-secondary text-white">

      <div className="flex items-center gap-3">
        {/* Header Logo */}
        <div className="w-6 h-6  ">
            <img src="https://i.tracxn.com/logo/company/aventisia_com_636299bb-ac38-4916-81f5-9bede5960b1c?format=webp&height=120&width=120"
                alt="Aventisia Logo" className="w-8 h-8 object-contain" />
        </div>

        {/* Header Title */}
        <span className="font-semibold text-lg">Worcspace</span>

        {/* Header Dropdown */}
        <div className="bg-white/10 my-2 px-3 py-1 rounded-xl text-sm flex items-center gap-1 cursor-pointer">
          Worcspace 1
          <IoMdArrowDropdown  className="text-white text-xl cursor-pointer" />
        </div>
      </div>

      {/* Header Search */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center my-6 mr-24 bg-white/10 px-4 py-2 rounded-xl w-[400px]">
          
          <FiSearch className="text-gray-300 mr-2" />
          
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm flex-1 placeholder:text-gray-300"
          />
          <FiCommand className="text-white text-xs cursor-pointer" />
          <span className="text-xs text-gray-300">K</span>

        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <FiBell className="text-white text-xl cursor-pointer" />

        {/* Profile */}
        <div className="w-8 h-8 bg-white text-secondary rounded-full flex items-center justify-center text-sm font-semibold">
          GK
        </div>
      </div>
    </div>
  );
}