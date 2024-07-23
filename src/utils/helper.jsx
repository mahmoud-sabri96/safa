import axios from "axios";
// ---------------------------------

export function removeHTMLTags(content) {
    // const regexForHTML = /(<([^>]+)>)/ig;
    // const contentwithoutTags = content?.replaceAll(regexForHTML, '');
    // return contentwithoutTags
    let doc = new DOMParser().parseFromString(content, 'text/html');
    return doc.body.textContent || "";
}


// download file from url
export const downloadFile = (name, url) => {
    axios.get(url)
        .then((response) => {
            response.blob()
                .then((blob) => {
                    const fileURL = URL.createObjectURL(blob);
                    let alink = document.createElement("a");
                    alink.href = fileURL;
                    alink.download = `${name}.pdf`;
                    alink.click();
                });
        });
};


// const removeHTMLTags = (htmlString) => {
//     const doc = new DOMParser().parseFromString(htmlString, 'text/html');
//     return doc.body.textContent || "";
//   };


export const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// export const uid = function () {
//     return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
//         const r = (Math.random() * 16) | 0,
//             v = c === "x" ? r : (r & 0x3) | 0x8;
//         return v.toString(16);
//     });
// }

export const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        // localStorage.setItem("isAuthenticated", true);
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        localStorage.removeItem("accessToken");
        // localStorage.removeItem("isAuthenticated");
        delete axios.defaults.headers.common.Authorization;
    }
};
