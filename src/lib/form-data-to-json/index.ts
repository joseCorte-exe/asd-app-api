export function formDataToObject(formData: FormData): Record<string, any> {
  const obj: Record<string, any> = {};

  for (const [key, value] of formData.entries()) {
    // Handle File objects
    if (value instanceof File) {
      obj[key] = value;
    }
    // Handle multiple values for the same key
    else if (obj[key] !== undefined) {
      // Convert to array if not already
      if (!Array.isArray(obj[key])) {
        obj[key] = [obj[key]];
      }
      obj[key].push(value);
    }
    // Handle single values
    else {
      obj[key] = value;
    }
  }

  return obj;
}