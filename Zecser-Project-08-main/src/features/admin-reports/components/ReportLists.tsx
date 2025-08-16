import {
  FaClipboardList,
  FaRegClock,
  FaCheckCircle,
  FaEdit,
} from "react-icons/fa";
import progress from "../../../assets/progress.png"
import { Search } from "lucide-react";

import { useReports } from "../hooks/useReports";

const ReportLists = () => {
  const {
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    totalProjects,
    completedProjects,
    ongoingProjects,
    avgCompletion,
    filteredReports,
    statusColor,
  } = useReports();

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <p className="mb-6 text-sm sm:text-base md:text-lg">
        Monitor and manage all construction projects with real-time status updates
      </p>


      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {/* Total Projects */}
        <div className="border-2 border-gray-700 rounded-lg p-3 sm:p-4 text-center">
          <p className="text-sm sm:text-md text-gray-700 font-bold mb-1 sm:mb-2">
            Total Projects
          </p>
          <div className="flex justify-center items-center gap-1 sm:gap-2">
            <FaClipboardList className="text-primary text-lg sm:text-xl" />
            <p className="text-lg sm:text-xl text-primary font-bold">{totalProjects}</p>
          </div>
        </div>

        {/* Completed Projects */}
        <div className="border-2 border-gray-700 rounded-lg p-3 sm:p-4 text-center">
          <p className="text-sm sm:text-md text-gray-700 font-bold mb-1 sm:mb-2">
            Completed Projects
          </p>
          <div className="flex justify-center items-center gap-1 sm:gap-2">
            <FaCheckCircle className="text-primary text-lg sm:text-xl" />
            <p className="text-lg sm:text-xl text-primary font-bold">{completedProjects}</p>
          </div>
        </div>

        {/* Ongoing Projects */}
        <div className="border-2 border-gray-700 rounded-lg p-3 sm:p-4 text-center">
          <p className="text-sm sm:text-md text-gray-700 font-bold mb-1 sm:mb-2">
            Ongoing Projects
          </p>
          <div className="flex justify-center items-center gap-1 sm:gap-2">
            <FaRegClock className="text-primary text-lg sm:text-xl" />
            <p className="text-lg sm:text-xl text-primary font-bold">{ongoingProjects}</p>
          </div>
        </div>

        {/* Average Completions */}
        <div className="border-2 border-gray-700 rounded-lg p-3 sm:p-4 text-center">
          <p className="text-sm sm:text-md text-gray-700 font-bold mb-1 sm:mb-2">
            Average Completions
          </p>
          <div className="flex justify-center items-center gap-1 sm:gap-2">
            <img src={progress} alt="icon" />
            <span className="text-lg sm:text-xl text-primary font-bold">{avgCompletion}%</span>
          </div>
        </div>
      </div>


      {/* Search + Filter */}
      <div className="flex items-center justify-between gap-2 w-full mb-10">
        {/* Search bar */}
        <div className="flex-1 max-w-xs sm:max-w-md md:max-w-[80%] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Client name, ID, or project "
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-[0_5px_6px_-1px_rgba(0,0,0,0.2),0_-4px_6px_-1px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* All Status Dropdown */}
        <div className="w-32">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full text-gray-600 text-sm text-center px-3 py-2 border  border-gray-300 rounded-lg focus:outline-none shadow-[0_5px_6px_-1px_rgba(0,0,0,0.2),0_-4px_6px_-1px_rgba(0,0,0,0.2)] focus:ring-1 focus:ring-primary cursor-pointer"
          >
            <option>All Status</option>
            <option>Completed</option>
            <option>Ongoing</option>
            <option>On Hold</option>
            <option>Not Started</option>
          </select>
        </div>

      </div>


      <div className="space-y-4">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            {/* Title */}
            <h2 className="font-semibold text-lg mb-3 truncate line-clamp-2">{report.title}</h2>

            {/* Mobile Layout  */}
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 mb-4 md:hidden">
              <div className="col-span-2 flex justify-between items-center gap-4">
                <div className="flex-1 min-w-0 ">
                  <span className="font-semibold block text-[11px]">Client ID</span>
                  <span className="whitespace-nowrap mt-1 block">{report.clientId}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-semibold block text-[11px]">Client Name</span>
                  <span className="whitespace-nowrap mt-1 block truncate line-clamp-2  ">{report.clientName}</span>
                </div>
                <button className="flex items-center gap-1 text-[11px] text-gray-600 border rounded px-2 py-1 hover:bg-gray-100 shrink-0 mt-[-25px]">
                  <FaEdit className="w-3 h-3" /> Edit
                </button>
              </div>

              <div>
                <span className="font-semibold block text-[11px]">Deadline</span>
                <span className="whitespace-nowrap mt-1 block">{report.deadline}</span>
              </div>
              <div>
                <span className="font-semibold block text-[11px] mb-2 ">Status</span>
                <span
                  className={`px-2 py-1 rounded-full ml-[-10px]  text-[10px] font-medium ${statusColor(
                    report.status
                  )}`}
                >
                  {report.status}
                </span>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-5 gap-3 text-sm text-gray-600 mb-4">
              <p>
                <span className="font-semibold block">Client ID</span>
                <span className="mt-1 block">{report.clientId}</span>
              </p>
              <p>
                <span className="font-semibold block ">Client Name</span>
                <span className=" mt-1 "> {report.clientName}</span>

              </p>
              <p>
                <span className="font-semibold block mb-1">Status</span>
                <span
                  className={`px-2 py-1  rounded-full text-xs font-medium ${statusColor(
                    report.status
                  )}`}
                >
                  {report.status}
                </span>
              </p>
              <p>
                <span className="font-semibold block mb-1">Deadline</span>
                {report.deadline}
              </p>
              <p>
                <span className="font-semibold block mb-1">Actions</span>
                <button className="flex items-center gap-1 text-sm text-gray-600 border rounded px-2 py-1 hover:bg-gray-100 hover:text-primary ">
                  <FaEdit className="w-4 h-4 hover:text-primary" /> Edit
                </button>
              </p>
            </div>

            {/* Progress */}
            <div className="mb-3">
              <p className="text-sm font-medium mb-1">Completion</p>

              {/* Progress bar + percentage in one row */}
              <div className="flex items-center gap-2 w-full md:w-1/3 sm:w-1/2">
                {/* Bar */}
                <div className="flex-1 bg-gray-300 rounded-full h-3">
                  <div
                    className="bg-[#78AF99] h-3 rounded-full"
                    style={{ width: `${report.completion}%` }}
                  ></div>
                </div>

                {/* Percentage */}
                <span className="text-xs md:text-sm text-gray-800 font-medium">
                  {report.completion}%
                </span>
              </div>
            </div>

            {/* Details */}
            <p className="text-sm text-gray-700">
              <span className="font-medium">Details:</span> {report.details}
            </p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ReportLists;
