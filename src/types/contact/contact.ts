import { ReactNode } from "react";

export interface ContactItem {
    name: string;
    icon: ReactNode | string;
    url: string;
    username: string;
    color: string;
    hoverColor: string;
    textColor: string;
    useImage?: boolean;
} 