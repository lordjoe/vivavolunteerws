
import Organization from "./Organization";



export  interface FilenameHolder {
    filename: string;

    //   ref: React.MutableRefObject<() => void>
}

export  interface OrganizationsHolder {
    organizations: Organization[];

    //   ref: React.MutableRefObject<() => void>
}

export  interface OrganizationHolder {
    organization: Organization;

    //   ref: React.MutableRefObject<() => void>
}

export interface ButtonRowProps {
    set: Set<string>;
}

export interface CallbackHolder {
    onchange: CallbackFunction;
}
export type CallbackFunction = () => void;