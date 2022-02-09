import { Attachment } from "./Attachment";

export interface Project {
    name: string,
    description: string,
    autor: string,
    autorEmail: string,
    attachments: Attachment
}