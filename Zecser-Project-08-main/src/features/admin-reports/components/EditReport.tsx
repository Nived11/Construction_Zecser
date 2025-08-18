import React from "react";
import { ChevronLeft } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";


interface EditReportPageProps {
  report: any;
  onBack: () => void;
}


const EditReportPage: React.FC<EditReportPageProps> = ({ report, onBack }) => {

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      toast.success("Report saved successfully!");

     setTimeout(() => {
      onBack();
     }, 2000);

    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to save report. Try again.");
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <Toaster/>
      {/* Header */}
      <p className="mb-6 text-[12px] sm:text-base md:text-[15px]">
        Monitor and manage all construction projects with real-time status
        updates
      </p>
      <div className="flex items-center gap-2 mb-6">
        <button onClick={onBack} className="text-primary hover:text-primary/80">
          <ChevronLeft size={22} />
        </button>
        <h1 className="text-base md:text-lg font-semibold text-primary">
          EDIT REPORT
        </h1>
      </div>

      {/* Form */}
      <div className="space-y-4 text-sm md:text-base">
        {/* Project Name */}
        <div>
          <label className="block text-primary font-medium mb-1">
            Project Name
          </label>
          <input
            type="text"
            defaultValue={report.title}
            className="w-full h-10 border border-gray-300 rounded-lg shadow-[0_1px_4px_-1px_rgba(0,0,0,0.4),0_-1px_4px_-1px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-1 focus:ring-primary px-3 py-2 text-xs md:text-sm"
          />
        </div>

        {/* Client Name */}
        <div>
          <label className="block text-primary font-medium mb-1">
            Client Name
          </label>
          <input
            type="text"
            defaultValue={report.clientName}
            className="w-full h-10 border border-gray-300 rounded-lg shadow-[0_1px_4px_-1px_rgba(0,0,0,0.4),0_-1px_4px_-1px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-1 focus:ring-primary px-3 py-2 text-xs md:text-sm"
          />
        </div>

        {/* Details */}
        <div>
          <label className="block text-primary font-medium mb-1">Details</label>
          <textarea
            defaultValue={report.details}
            rows={3}
            className="w-full border border-gray-300 rounded-lg shadow-[0_1px_4px_-1px_rgba(0,0,0,0.4),0_-1px_4px_-1px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-1 focus:ring-primary px-3 py-2 text-xs md:text-sm"
          />
        </div>
        {/* Status + Completion */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-primary font-medium mb-1">
              Status
            </label>
            <select
              defaultValue={report.status}
              className="w-full h-10 border border-gray-300 rounded-lg shadow-[0_1px_4px_-1px_rgba(0,0,0,0.4),0_-1px_4px_-1px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-1 focus:ring-primary px-2 py-1 text-xs md:text-sm"
            >
              <option>Ongoing</option>
              <option>Completed</option>
              <option>On Hold</option>
              <option>Not Started</option>
            </select>
          </div>
          <div>
            <label className="block text-primary font-medium mb-1">
              Completion (%)
            </label>
            <input
              type="number"
              defaultValue={report.completion}
              className="w-full h-10 border border-gray-300 rounded-lg shadow-[0_1px_4px_-1px_rgba(0,0,0,0.4),0_-1px_4px_-1px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-1 focus:ring-primary shadow-[0_1px_4px_-1px_rgba(0,0,0,0.4),0_-1px_4px_-1px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-1 focus:ring-primary px-2 py-1 text-xs md:text-sm"
            />
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-primary font-medium mb-1">
              Start Date
            </label>
            <input
              type="date"
              defaultValue={report.startDate}
              className="w-full h-10 border border-gray-300 rounded-lg shadow-[0_1px_4px_-1px_rgba(0,0,0,0.4),0_-1px_4px_-1px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-1 focus:ring-primary px-2 py-1 text-xs md:text-sm"
            />
          </div>
          <div>
            <label className="block text-primary font-medium mb-1">
              Deadline
            </label>
            <input
              type="date"
              defaultValue={report.deadline}
              className="w-full h-10 border border-gray-300 rounded-lg shadow-[0_1px_4px_-1px_rgba(0,0,0,0.4),0_-1px_4px_-1px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-1 focus:ring-primary px-2 py-1 text-xs md:text-sm"
            />
          </div>
        </div>

        {/* Client ID + Location */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-primary font-medium mb-1">
              Client ID
            </label>
            <input
              type="text"
              defaultValue={report.clientId}
              className="w-full h-10 border border-gray-300 rounded-lg shadow-[0_1px_4px_-1px_rgba(0,0,0,0.4),0_-1px_4px_-1px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-1 focus:ring-primary px-2 py-1 text-xs md:text-sm"
            />
          </div>
          <div>
            <label className="block text-primary font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              defaultValue={report.location}
              className="w-full h-10 border border-gray-300 rounded-lg shadow-[0_1px_4px_-1px_rgba(0,0,0,0.4),0_-1px_4px_-1px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-1 focus:ring-primary px-2 py-1 text-xs md:text-sm"
            />
          </div>
        </div>

        {/* Add Project To */}
        <div>
          <label className="block text-primary font-medium mb-1">
            Add This Project To
          </label>
          <select
            defaultValue="Recent Projects"
            className="w-full h-10 border border-gray-300 rounded-lg shadow-[0_1px_4px_-1px_rgba(0,0,0,0.4),0_-1px_4px_-1px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-1 focus:ring-primary px-3 py-2 text-xs md:text-sm"
          >
            <option>Recent Projects</option>
            <option>Archived Projects</option>
            <option>Favorites</option>
          </select>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={ handleSubmit } 

          className="px-15 py-2 bg-primary text-white rounded-full text-sm md:text-base font-medium shadow-md hover:bg-primary/90">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditReportPage;
