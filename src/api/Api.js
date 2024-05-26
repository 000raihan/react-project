// const baseUrl = `http://localhost:6050`;
// const baseUrl = `http://128.199.87.251:6050`;

function uploadVideo(videoBlob, currentUser) {
  const formData = new FormData();
  formData.append("video_file", videoBlob);
  formData.append("sap_id", currentUser.sap_user_code);
  formData.append("work_area_t", currentUser.work_area_t);
  formData.append("rm_code", currentUser.rm_code);
  formData.append("zm_code", currentUser.zm_code);
  formData.append("gm_code", currentUser.gm_code);

  const requestOptions = {
    method: "POST",
    body: formData,
  };
  return fetch(`/api/upload_video`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
}

function fetchUserInfo(sap_id) {
  const data = {
    sap_id: sap_id,
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch("/api/login", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
}

export const CallApi = {
  fetchUserInfo,
  uploadVideo,
};
