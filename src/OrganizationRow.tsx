import React from 'react';
import Organization from './Organization';
import OrganizationElement from './OrganizationElement';
import { OrganizationsHolder } from './Holders';

function OrganizationRow(props: OrganizationsHolder) {
    const { organizations } = props;

    return (
        <tr>
            {organizations.map((item, index) => (
                <OrganizationElement key={index} organization={item} />
            ))}
        </tr>
    );
}

export default OrganizationRow;