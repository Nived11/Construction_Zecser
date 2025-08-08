import { useState, useRef } from "react";
import toast from "react-hot-toast";
// import api from "../../../lib/api"; 

export const useAddPhoto = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form fields
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<"active" | "inactive">("active");
  const [loading, setLoading] = useState(false);

  // File change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) return toast.error("Please upload a photo.");

    setLoading(true);

    try {
      // Prepare FormData for file upload
      const formData = new FormData();
      formData.append("photo", file);
      formData.append("status", status);


      // const res = await api.post("/api/gallery", formData, {
      //   headers: { "Content-Type": "multipart/form-data" },
      // });

      toast.success("Photo uploaded successfully!");
      // console.log("Response:", res.data);

      // Reset
      setFile(null);
      setPreview(null);
      setStatus("active");
    } catch (err: any) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setStatus("active");
  };

  return {
    fileInputRef,
    preview,
    status,
    loading,
    handleFileChange,
    handleSubmit,
    handleReset,
    setStatus,
  };
};
