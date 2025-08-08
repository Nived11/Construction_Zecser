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
  }

  // Service Sub Description
  if (!data.serviceSubDescription.trim()) {
    errors.serviceSubDescription = "Service sub description is required";
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
