import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Button from "../components/Button";
import data from "../data/mockData";
import { FiSearch } from "react-icons/fi";

export default function KnowledgeBase() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">

      {/* Header Section */}
      <Header />

      {/* Sidebar and Content Section */}
      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <div className="p-6 bg-white flex-1">
            
            <div className="flex justify-between items-center mb-4">
              {/* Content Title */}
              <h2 className="text-xl font-semibold">
                Knowledge Base
              </h2>

              {/* Search + Button */}
              <div className="flex items-center gap-3">
                
                {/* Search Field */}
                <div className="flex items-center border bg-white-700 px-3 py-2 rounded-lg">
                  <FiSearch className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none text-sm placeholder:text-gray-400"
                  />
                </div>

                {/* Create Button */}
                <Button onClick={() => setOpen(true)}>
                  + Create New
                </Button>

              </div>
            </div>

            {/* Card Section */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map((item, i) => (
                <Card key={i} item={item} />
              ))}
            </div>

            {/* Footer Section */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              
              <div className="text-black font-bold">
                6 rows
              </div>

              <div className="flex items-center gap-4">
                
                <div className="flex items-center gap-2">
                  <span className="text-black font-bold">Rows per page</span>
                  <select className="border rounded-md px-2 py-1 text-sm outline-none">
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                    <option>50</option>
                  </select>
                </div>

                <div className="text-black font-bold">
                  page 1 of 1
                </div>

                <div className="flex items-center gap-1">
                  <button className="px-2 py-1 border rounded disabled:opacity-50">
                    {"<<"}
                  </button>
                  <button className="px-2 py-1 border rounded disabled:opacity-50">
                    {"<"}
                  </button>
                  <button className="px-2 py-1 border rounded disabled:opacity-50">
                    {">"}
                  </button>
                  <button className="px-2 py-1 border rounded disabled:opacity-50">
                    {">>"}
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
}