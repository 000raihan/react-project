
export const CallApi = {
    fetchUserInfo,
    uploadVideo,
};

function uploadVideo(videoBlob,sap_id) {
    const formData = new FormData();
    formData.append('video_file', videoBlob);
    formData.append('sap_id', sap_id);

    const requestOptions = {
        method: 'POST',
        body: formData,
    };
    return fetch('http://api.sotbangladesh.com/api/upload_video', requestOptions)
        .then(response => response.json())
        .then((result) => {
            return result;
        });
};

function fetchUserInfo(sap_id) {
    const data = {
        sap_id: sap_id,
    };
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };
    return fetch('http://api.sotbangladesh.com/api/login', requestOptions)
        .then(response => response.json())
        .then((result) => {
            return result;
        });
};
