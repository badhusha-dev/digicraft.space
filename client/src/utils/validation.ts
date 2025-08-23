export interface ValidationError {
  field: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  projectTypes: string[];
  message: string;
}

export interface JobApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  linkedin?: string;
  portfolio?: string;
  coverLetter: string;
  resume?: File;
}

export function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters long" });
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push({ field: "email", message: "Please enter a valid email address" });
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push({ field: "message", message: "Message must be at least 10 characters long" });
  }

  return errors;
}

export function validateJobApplication(data: JobApplicationData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.push({ field: "firstName", message: "First name is required" });
  }

  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.push({ field: "lastName", message: "Last name is required" });
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push({ field: "email", message: "Please enter a valid email address" });
  }

  if (!data.coverLetter || data.coverLetter.trim().length < 50) {
    errors.push({ field: "coverLetter", message: "Cover letter must be at least 50 characters long" });
  }

  if (data.linkedin && !isValidUrl(data.linkedin)) {
    errors.push({ field: "linkedin", message: "Please enter a valid LinkedIn URL" });
  }

  if (data.portfolio && !isValidUrl(data.portfolio)) {
    errors.push({ field: "portfolio", message: "Please enter a valid portfolio URL" });
  }

  return errors;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
