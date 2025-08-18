import { useState, useMemo, useEffect } from "react";
import { reportsData } from "../data/reportsData";
// import { toast } from "react-hot-toast";
// import api from "../../../lib/api"; // Uncomment if you have an API setup


export const useReports = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // stats
  const totalProjects = reportsData.length;
  const completedProjects = reportsData.filter(r => r.status === "Completed").length;
  const ongoingProjects = reportsData.filter(r => r.status === "Ongoing").length;
  const avgCompletion = Math.round(
    reportsData.reduce((acc, r) => acc + r.completion, 0) / reportsData.length
  );

  // filter reports
  const filteredReports = useMemo(() => {
    return reportsData.filter((r) => {
      return (
        (statusFilter === "All Status" || r.status === statusFilter) &&
        (r.clientName.toLowerCase().includes(search.toLowerCase()) ||
          r.clientId.toLowerCase().includes(search.toLowerCase()) ||
          r.title.toLowerCase().includes(search.toLowerCase()))
      );
    });
  }, [search, statusFilter]);

  const statusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Ongoing":
        return "bg-blue-100 text-blue-700";
      case "On Hold":
        return "bg-yellow-100 text-yellow-700";
      case "Not Started":
        return "bg-gray-200 text-gray-600";
      default:
        return "";
    }
  };

  // const handleEditsubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     //     const res = await api.post("/api/services", formData, {
  //     //   headers: { "Content-Type": "multipart/form-data" },
  //     // });
        
  //     toast.success("Service saved successfully!");
      
      
  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //       toast.error("Failed to save service. Please try again.");
  //     }
  // };

  return {
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
    loading,
    // handleEditsubmit,
  };
};
