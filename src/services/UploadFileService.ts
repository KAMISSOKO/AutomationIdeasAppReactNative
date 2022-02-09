import { BackendResponse } from "../types/BackendResponse";

export function UploadFileService(file: FormData): Promise<BackendResponse> {
    return new Promise((resolve, reject) => {
        console.log('[ UPLOAD FILE SERVICE STARTED ]');
        let config = {
            method: 'POST',
            headers: {
             'Accept': 'application/json',
            },
            body: file,
         };
     
         fetch('http://172.20.10.2:3030/upload-attachment', config)
          .then((res) => {
             let result = {
                 status: res.status,
                 requestFinishedWithSuccess: res.ok
             };
             resolve(result);
          })
          .catch((error) => {
             reject(error);
          });
    });
}