import {OrganizationsHolder} from "./Holders";
import React, {ReactNode} from 'react';
import OrganizationRow from "./OrganizationRow";
import Organization from "./Organization";


const OrganizationTable: React.FC<OrganizationsHolder> = ({ organizations }) => {

    let ActiveOrganizations: Organization[] = [];
    for (const organization of organizations) {
       if(organization.isActive())
           ActiveOrganizations.push(organization);
    }

    let row_length = 0;
    let RowOrganizations: Organization[] = [];
    let inner: ReactNode[] = [];

    for (let i = 0; i < ActiveOrganizations.length; i++) {
        const activeOrganization = ActiveOrganizations[i];
        RowOrganizations.push(activeOrganization);
        if(row_length++ > 2) {
            inner.push(<OrganizationRow organizations={RowOrganizations} />);
            RowOrganizations = [];
            row_length = 0;
        }

    }
    if(RowOrganizations.length > 0)
        inner.push(<OrganizationRow organizations={RowOrganizations} />);

    return (

    <div>
             <table className="table-container">
                <tbody>
                {inner}
                </tbody>
            </table>
       </div>
      );
};

export default OrganizationTable;