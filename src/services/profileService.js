export const getProfile = () => {
  return JSON.parse(
    localStorage.getItem("clientProfile")
  );
};

export const saveProfile = (profileData) => {
  localStorage.setItem(
    "clientProfile",
    JSON.stringify(profileData)
  );
};