import axios from 'axios';
import { Project } from '../interfaces/Project';

let axiosInstance = axios.create({
    baseURL: 'http://172.20.10.2:3030'
});

export function SubmitFormDataService(project: Project): Promise<object> {
    return new Promise((resolve, reject) => {
        axiosInstance.post('/newProjectIdea', {
            project: project
        })
         .then((res) => {
             let result = {
                 status: res.status,
                 datas: res.data
             };

            resolve(result);
         })
         .catch((error) => {
             reject(error);
         });
    });
}