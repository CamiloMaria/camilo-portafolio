/**
 * Extracts initials from a full name
 * @param name The full name to extract initials from
 * @returns The initials (first letter of first name and first letter of last name)
 */
export const getInitials = (name: string): string => {
  if (!name) return '';
  
  const nameParts = name.split(' ');
  
  // If only one name, return its first letter
  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }
  
  // Get first letter of first name and first letter of last name
  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];
  
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}; 