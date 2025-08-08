import { useState } from "react";
import { toast } from "react-hot-toast";
import { validateServiceForm } from "../utils/serviceFormvalidation";
// import api from "../../../lib/api"; 

export const useServiceForm = () => {
  const [serviceName, setServiceName] = useState("");
  const [serviceSubTitle, setServiceSubTitle] = useState("");
  const [serviceSubDescription, setServiceSubDescription] = useState("");

  const [offers, setOffers] = useState([{ heading: "", description: "" }]);
  const [whyUsList, setWhyUsList] = useState([{ heading: "", description: "" }]);

  const [status, setStatus] = useState("active");
  const [serviceIcon, setServiceIcon] = useState<File | null>(null);
  const [serviceBanner, setServiceBanner] = useState<File | null>(null);
  const [servicePhoto, setServicePhoto] = useState<File | null>(null);

  const [serviceIconPreview, setServiceIconPreview] = useState<string | null>(null);
  const [serviceBannerPreview, setServiceBannerPreview] = useState<string | null>(null);
  const [servicePhotoPreview, setServicePhotoPreview] = useState<string | null>(null);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

 
  const addOffer = () => {
    setOffers([...offers, { heading: "", description: "" }]);
  };

 
  const addWhyUs = () => {
    setWhyUsList([...whyUsList, { heading: "", description: "" }]);
  };

const removeOffer = (index: number) => {
  setOffers(offers.filter((_, i) => i !== index));
};

const removeWhyUs = (index: number) => {
  setWhyUsList(whyUsList.filter((_, i) => i !== index));
};

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateServiceForm({
    serviceName,
    serviceIcon,
    serviceBanner,
    servicePhoto,
    serviceSubTitle,
    serviceSubDescription,
    offers,
    whyUsList,
    status,
  });
  setErrors(errors); 

    const formData = {
      serviceName,
      serviceSubTitle,
      serviceSubDescription,
      offers,
      whyUsList,
      status,
      serviceIcon,
      serviceBanner,
      servicePhoto,
    };

    if (Object.keys(errors).length > 0) {
    console.log("Validation errors:", errors);
    toast.error("Please fix the errors in the form.");
    return; 
  }

    try {
      
    //   const res = await api.post("/api/gallery", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });

      console.log("Submitting form:", formData);
      toast.success("Service saved successfully!");
    } catch (error) {
      console.error("Error saving service:", error);
      toast.error("Failed to save service.");
    }
  };

  const handleCancel = () => {
    setServiceName("");
    setServiceSubTitle("");
    setServiceSubDescription("");
    setOffers([{ heading: "", description: "" }]);
    setWhyUsList([{ heading: "", description: "" }]);
    setStatus("active");
    setServiceIcon(null);
    setServiceBanner(null);
    setServicePhoto(null);
    setServiceIconPreview(null);
    setServiceBannerPreview(null);
    setServicePhotoPreview(null);
    setErrors({});
  };

  return {
    serviceName, setServiceName,
    serviceSubTitle, setServiceSubTitle,
    serviceSubDescription, setServiceSubDescription,
    offers, setOffers, addOffer, removeOffer,
    whyUsList, setWhyUsList, addWhyUs, removeWhyUs,
    status, setStatus,
    serviceIconPreview, setServiceIconPreview,
    serviceBannerPreview, setServiceBannerPreview,
    servicePhotoPreview, setServicePhotoPreview,
    handleImageChange,
    handleSubmitForm,
    handleCancel,
    setServiceIcon, setServiceBanner, setServicePhoto,
    errors
  };
};
