import { useState } from "react";
import { toast } from "react-hot-toast";
import { validateServiceForm } from "../utils/serviceFormvalidation";
import type { ServiceFormValues, ValidationErrors } from "../utils/serviceFormvalidation";
// import api from "../../../lib/api"; 

export const useServiceForm = () => {
    const [serviceName, setServiceName] = useState("");
    const [serviceSubTitle, setServiceSubTitle] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");
    const [serviceSubDescription, setServiceSubDescription] = useState("");
    const [offerHeading, setOfferHeading] = useState("");
    const [offerDescription, setOfferDescription] = useState("");
    const [whyUsHeading, setWhyUsHeading] = useState("");
    const [whyUsDescription, setWhyUsDescription] = useState("");
    const [status, setStatus] = useState("active");
    const [serviceIcon, setServiceIcon] = useState<File | null>(null);
    const [serviceBanner, setServiceBanner] = useState<File | null>(null);
    const [servicePhoto, setServicePhoto] = useState<File | null>(null);

    const [serviceIconPreview, setServiceIconPreview] = useState<string | null>(null);
    const [serviceBannerPreview, setServiceBannerPreview] = useState<string | null>(null);
    const [servicePhotoPreview, setServicePhotoPreview] = useState<string | null>(null);

    const [errors, setErrors] = useState<ValidationErrors>({});


    // Handle image uploads
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

    // Handle submit
    const handleSubmitForm = async (e: React.FormEvent) => {
  e.preventDefault();

  const formData: ServiceFormValues = {
    serviceName,
    serviceSubTitle,
    serviceDescription,
    serviceSubDescription,
    offerHeading,
    offerDescription,
    whyUsHeading,
    whyUsDescription,
    serviceIcon,
    serviceBanner,
    servicePhoto,
  };

  const validationErrors = validateServiceForm(formData);
  setErrors(validationErrors);

  // ✅ Stop if there are errors
  if (Object.keys(validationErrors).length > 0) {
    toast.error("Please fix the errors in the form.");
    return;
  }

  try {
    // await api.post("/api/gallery", formData, { 
    //     headers: { "Content-Type": "multipart/form-data" }
    // });
    console.log("Service Form Data:", formData);
    toast.success("Form data logged to console!");

    setServiceName("");
    setServiceSubTitle("");
    setServiceDescription("");
    setServiceSubDescription("");
    setOfferHeading("");
    setOfferDescription("");
    setWhyUsHeading("");
    setWhyUsDescription("");
    setStatus("active");
    setServiceIcon(null);
    setServiceBanner(null);
    setServicePhoto(null);
    setServiceIconPreview(null);   
    setServiceBannerPreview(null); 
    setServicePhotoPreview(null);  
    setErrors({});
  } catch (error) {
    toast.error("Form submission failed.");
  }
};

    // Handle cancel/reset
    const handleCancel = () => {
        setServiceName("");
        setServiceSubTitle("");
        setServiceDescription("");
        setServiceSubDescription("");
        setOfferHeading("");
        setOfferDescription("");
        setWhyUsHeading("");
        setWhyUsDescription("");
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
        serviceDescription, setServiceDescription,
        serviceSubDescription, setServiceSubDescription,
        offerHeading, setOfferHeading,
        offerDescription, setOfferDescription,
        whyUsHeading, setWhyUsHeading,
        whyUsDescription, setWhyUsDescription,
        status, setStatus,
        serviceIcon, setServiceIcon,
        serviceBanner, setServiceBanner,
        servicePhoto, setServicePhoto,
        serviceIconPreview, setServiceIconPreview,
        serviceBannerPreview, setServiceBannerPreview,
        servicePhotoPreview, setServicePhotoPreview,
        handleImageChange,
        handleSubmitForm,
        handleCancel,
        errors
    };
};
