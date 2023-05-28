import Organization from "./Organization";

class OrganizationJSON {


    name: string = "";
    address: string = "";
    contact: string = "";
    phone: string = "";
    email: string = "";
    website: string = "";
    volunteerPage: string = "";
    logoPage: string = "";
    activities: string[] = [];
    courtOrdered: string = "";

    public asOrganization2() {
        let ret: Organization = new Organization(this.name);
        ret.contactName = this.contact;
        ret.phone = this.phone;
        ret.email = this.email;
        ret.phone = this.phone;
        ret.allowsCourtOrdered = this.courtOrdered === "true";
        ret.phone = this.phone;
        ret.filters = this.activities;
        ret.website = this.website;
        ret.volunteerPage =  this.volunteerPage;
        ret.logo =  this.logoPage;
        return ret;
    }

}

export default OrganizationJSON;