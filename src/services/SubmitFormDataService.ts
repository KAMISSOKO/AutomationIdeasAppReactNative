import axios from 'axios';
import { Project } from '../interfaces/Project';
import { BackendResponse } from '../types/BackendResponse';
import { UploadFileService } from './UploadFileService';

let axiosInstance = axios.create({
    baseURL: 'http://172.20.10.2:3030'
});

export function SubmitFormDataService(file: FormData, project?: Project): Promise<BackendResponse> {
    return new Promise((resolve, reject) => {
        axiosInstance.post('/project', project)
         .then((res) => {
            UploadFileService(file)
             .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
         })
         .catch((error) => {
             reject(error);
         });
    });
}