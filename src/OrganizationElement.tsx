import {OrganizationHolder, OrganizationsHolder} from "./Holders";
import React, {ReactNode} from 'react';
import Organization from "./Organization";
import OrganizationTable from "./OrganizationTable";

class OrganizationElement extends React.Component<OrganizationHolder> {

    handleSiteClick = () => {
        let organization = this.props.organization;
        window.open(organization.website, '_blank');
    };

    handleVolunteerClick = () => {
        let organization = this.props.organization;
        window.open(organization.volunteerPage, '_blank');
    };


    render() {
        let organization = this.props.organization;
        return (
            <td className="organization-element">
                <img  src={organization.logo} alt={organization.name} className="organization-logo"/>
                <h3 className="doCenter">{organization.name}</h3>
                <div className="organization_button-row">
                    <button className="button-88" onClick={this.handleSiteClick}>Site</button>
                    <button className="button-88" onClick={this.handleVolunteerClick}>Volunteer</button>
                </div>

            </td>
        );
    }
}

export default OrganizationElement;