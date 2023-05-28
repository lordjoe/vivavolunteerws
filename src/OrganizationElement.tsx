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
            <td>
                <img src={organization.logo} alt={organization.name} className="organization-logo"/>
                <h3>{organization.name}</h3>
                <div>
                    <button className="button" onClick={this.handleSiteClick}>Site</button>
                    <button className="button" onClick={this.handleVolunteerClick}>Volunteer</button>
                </div>

            </td>
        );
    }
}

export default OrganizationElement;