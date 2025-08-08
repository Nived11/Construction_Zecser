export interface ServiceFormValues {
  serviceName: string;
  serviceSubTitle: string;
  serviceDescription: string;
  serviceSubDescription: string;
  offerHeading: string;
  offerDescription: string;
  whyUsHeading: string;
  whyUsDescription: string;
  serviceIcon: File | null;
  serviceBanner: File | null;
  servicePhoto: File | null;
}

export interface ValidationErrors {
  serviceName?: string;
  serviceSubTitle?: string;
  serviceDescription?: string;
  serviceSubDescription?: string;
  offerHeading?: string;
  offerDescription?: string;
  whyUsHeading?: string;
  whyUsDescription?: string;
  serviceIcon?: string;
  serviceBanner?: string;
  servicePhoto?: string;
}

export const validateServiceForm = (values: ServiceFormValues): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Helper for string validation
  const validateText = (
    field: keyof ServiceFormValues,
    label: string,
    min: number,
    max: number
  ) => {
    const rawVal = values[field];
    const val = typeof rawVal === "string" ? rawVal.trim() : "";
    if (!val) {
      errors[field] = `${label} is required`;
    } else if (val.length < min) {
      errors[field] = `${label} must be at least ${min} characters`;
    } else if (val.length > max) {
      errors[field] = `${label} must not exceed ${max} characters`;
    }
  };

  // Text validations
  validateText("serviceName", "Service Name", 3, 50);
  validateText("serviceSubTitle", "Service Sub Title", 3, 100);
  validateText("serviceDescription", "Service Description", 10, 300);
  validateText("serviceSubDescription", "Service Sub Description", 10, 300);
  validateText("offerHeading", "Offer Heading", 3, 60);
  validateText("offerDescription", "Offer Description", 10, 200);
  validateText("whyUsHeading", "Why Us Heading", 3, 60);
  validateText("whyUsDescription", "Why Us Description", 10, 200);

  // File validations
  if (!values.serviceIcon) {
    errors.serviceIcon = "Service icon is required";
  }  if (!values.serviceBanner) {
    errors.serviceBanner = "Service Banner is required";
  }
  if (!values.servicePhoto) {
    errors.servicePhoto = "Service image is required";
  }

  return errors;
};
