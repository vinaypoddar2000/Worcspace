import { VscChromeClose } from "react-icons/vsc";

export default function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end">
      <div className="w-[500px] bg-white h-full shadow-lg flex flex-col relative">

        {/* Modalpopup Header */}
        <div className="p-6 border-b relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
          >
            <VscChromeClose className="text-black text-xl cursor-pointer" />
          </button>

          <h2 className="text-lg font-semibold">
            Create New Knowledge Base
          </h2>
          <p className="text-gray-500 text-sm">
            Best for quick answers from documents, websites and text files.
          </p>
        </div>

        {/* Modalpopup Content */}
        <div className="flex-1 overflow-y-auto p-6">
          
          <label className="text-sm mb-1 font-medium">
            Name (Cannot be edited later)
            <span className="text-red-600">*</span>
          </label>
          <input className="border p-2 rounded mb-3 w-full" placeholder="Name"/>

          <label className="text-sm mb-1 font-medium">Description</label>
          <textarea className="border p-2 rounded mb-3 w-full" placeholder="Description" />

          <label className="text-sm mb-1 font-medium">
            Vector Store<span className="text-red-600">*</span>
          </label>
          <select className="border p-2 rounded mb-3 w-full text-gray-500">
            <option>Qdrant</option>
          </select>

          <label className="text-sm mb-1 font-medium">
            LLM Embedding Model<span className="text-red-600">*</span>
          </label>
          <select className="border p-2 rounded mb-3 w-full text-gray-500">
            <option>text-embedding-ada-002</option>
          </select>

        </div>

        {/* Modalpopup Footer */}
        <div className="p-4 flex justify-end">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-[10px]">
            Create
          </button>
        </div>

      </div>
    </div>
  );
}