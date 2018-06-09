import { CALL_API } from 'redux-api-middleware';

export const UPLOAD_BEGIN = 'UPLOAD_BEGIN';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_FAILURE = 'UPLOAD_FAILURE';

export function uploadFile(file) {
    let formData = new FormData();
    formData.append("data", new Blob([JSON.stringify({imageName:'testtest'})], {type : 'application/json'}));
    formData.append('file', file.image);

    return {
        [CALL_API]: {
            endpoint: `http://localhost:9999/image`,
            method: 'POST',
            body: formData,
            types: [UPLOAD_BEGIN, UPLOAD_SUCCESS, UPLOAD_FAILURE],
        },
    };
}
