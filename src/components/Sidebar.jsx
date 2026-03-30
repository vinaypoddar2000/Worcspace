import {
  FiDatabase,
  FiShield
} from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuFileBox, LuColumns3, LuMonitorPlay, LuBookOpenCheck } from "react-icons/lu";
import { CiMonitor } from "react-icons/ci";
import { BiBarChart } from "react-icons/bi";
import { BsPersonVcard } from "react-icons/bs";
import { PiUserCircleDashed } from "react-icons/pi";

export default function Sidebar() {
  const sections = [
    {
      title: "MY PROJECTS",
      items: [
        { name: "Agents", icon: <RiRobot2Line /> },
        { name: "AI Models", icon: <LuFileBox /> },
        { name: "Library", icon: <LuColumns3 /> },
      ],
    },
    {
      title: "ORCHESTRATOR",
      items: [
        { name: "Published", icon: <RiRobot2Line /> },
        { name: "Machines", icon: <CiMonitor /> },
        { name: "Queues", icon: <FiDatabase /> },
        { name: "Triggers", icon: <AiOutlineThunderbolt /> },
        { name: "Jobs", icon: <LuMonitorPlay  /> },
        { name: "Executions", icon: <LuMonitorPlay  /> },
        { name: "Vault", icon: <FiShield /> },
        { name: "Knowledge Base", icon: <LuBookOpenCheck /> },
        { name: "Key Store", icon: <BiBarChart /> },
      ],
    },
    {
      title: "ADMIN",
      items: [
        { name: "Tenant", icon: <BsPersonVcard /> },
        { name: "Integrations", icon: <PiUserCircleDashed /> },
      ],
    },
  ];

  return (
    <div className="w-64 bg-white border-r h-full px-3 py-4">
      {sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          {/* Sidebar Section Title */}
          <h2 className="text-xs font-semibold text-gray-500 mb-2 px-2">
            {section.title}
          </h2>

          {/* Sidebar Items */}
          {section.items.map((item, i) => {
            const isActive = item.name === "Knowledge Base";

            return (
              <div
                key={i}
                className={`flex ml-4 items-center gap-3 px-2 py-2 rounded-md cursor-pointer text-sm
                  ${
                    isActive
                      ? "bg-purple-100 text-blue-600 font-medium"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {/* Items Icon */}
                <span className="text-base opacity-80">{item.icon}</span>

                {/* Item Text */}
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}