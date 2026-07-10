import {
  getProfileByClientId,
  updateProfile,
} from "../models/profile.model.js";

// Get Profile Service
export const fetchProfile = async (clientId) => {
  try {
    const result = await getProfileByClientId(clientId);

    if (result.length === 0) {
      return null;
    }

    return result[0];
  } catch (error) {
    throw error;
  }
};

// Update Profile Service
export const editProfile = async (
  clientId,
  full_name,
  phone,
  company
) => {
  try {
    const result = await updateProfile(
      clientId,
      full_name,
      phone,
      company
    );

    return result;
  } catch (error) {
    throw error;
  }
};