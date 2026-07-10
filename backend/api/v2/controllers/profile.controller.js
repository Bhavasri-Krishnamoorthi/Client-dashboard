import {
  fetchProfile,
  editProfile,
} from "../services/profile.service.js";

// Get Profile
export const getProfile = async (req, res) => {
  try {
    const { clientId } = req.params;

    const profile = await fetchProfile(clientId);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.status(200).json({
      success: true,
      data: profile,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Update Profile
export const updateProfile = async (req, res) => {
  try {
    const { clientId } = req.params;

    const {
      full_name,
      phone,
      company,
    } = req.body;

    await editProfile(
      clientId,
      full_name,
      phone,
      company
    );

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};