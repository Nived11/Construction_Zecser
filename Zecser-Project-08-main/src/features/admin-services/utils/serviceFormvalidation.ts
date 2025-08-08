export interface ServiceFormData {
  serviceName: string;
  serviceIcon: File | null;
  serviceBanner: File | null;
  servicePhoto: File | null;
  serviceSubTitle: string;
  serviceSubDescription: string;
  offers: { heading: string; description: string }[];
  whyUsList: { heading: string; description: string }[];
  status: string;
}

export interface ValidationErrors {
  [key: string]: string;
}

export const validateServiceForm = (data: ServiceFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Service Name
  if (!data.serviceName.trim()) {
    errors.serviceName = "Service name is required";
  } else if (data.serviceName.length < 3) {
    errors.serviceName = "Service name must be at least 3 characters";
  } else if (data.serviceName.length > 20) {
    errors.serviceName = "Service name must be less than 20 characters";
  }

  // Service Icon
  if (!data.serviceIcon) {
    errors.serviceIcon = "Service icon is required";
  }

  // Service Banner
  if (!data.serviceBanner) {
    errors.serviceBanner = "Service banner is required";
  }

  // Service Photo
  if (!data.servicePhoto) {
    errors.servicePhoto = "Service photo is required";
  }

  // Service Sub Title
  if (!data.serviceSubTitle.trim()) {
    errors.serviceSubTitle = "Service sub title is required";
  } else if (data.serviceSubTitle.length < 3) {
    errors.serviceSubTitle = "Min 3 characters required";
  } else if (data.serviceSubTitle.length > 50) {
    errors.serviceSubTitle = "Max 50 characters allowed";
  }

  // Service Sub Description
  if (!data.serviceSubDescription.trim()) {
    errors.serviceSubDescription = "Service sub description is required";
  } else if (data.serviceSubDescription.length < 10) {
    errors.serviceSubDescription = "Min 10 characters required";
  }

  // Offers
  if (!data.offers.length) {
    errors.offers = "At least one offer is required";
  } else {
    data.offers.forEach((offer, index) => {
      if (!offer.heading.trim()) {
        errors[`offer_heading_${index}`] = "Offer heading is required";
      }
      if (!offer.description.trim()) {
        errors[`offer_description_${index}`] = "Offer description is required";
      }
    });
  }

  // Why Us List
  if (!data.whyUsList.length) {
    errors.whyUsList = "At least one 'Why Us' item is required";
  } else {
    data.whyUsList.forEach((item, index) => {
      if (!item.heading.trim()) {
        errors[`whyus_heading_${index}`] = "Why Us heading is required";
      }
      if (!item.description.trim()) {
        errors[`whyus_description_${index}`] = "Why Us description is required";
      }
    });
  }

  // Status
  if (!data.status) {
    errors.status = "Please select a status";
  }

  return errors;
};

// ✅ Live per-field validation
export const validateSingleField = (
  name: string,
  value: any
): string => {
  switch (name) {
    case "serviceName":
      if (!value.trim()) return "Service name is required";
      if (value.length < 3) return "Min 3 characters required";
      if (value.length > 20) return "Max 20 characters allowed";
      break;

    case "serviceSubTitle":
      if (!value.trim()) return "Service sub title is required";
      if (value.length < 3) return "Min 3 characters required";
      if (value.length > 50) return "Max 50 characters allowed";
      break;

    case "serviceSubDescription":
      if (!value.trim()) return "Service sub description is required";
      if (value.length < 10) return "Min 10 characters required";
      break;

    case "status":
      if (!value) return "Please select a status";
      break;
  }
  return "";
};
