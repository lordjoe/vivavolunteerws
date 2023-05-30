import React, {useEffect, useState} from 'react';

import HandleOrganization from "./HandleOrganization";
import Organization from "./Organization";
import PersistentObject from "./PersistentObject";
import OrganizationJSON from "./OrganizationJSON";
import { JsonString } from "./VivaJSON";
import FilterButtons from "./FilterButtons";
import VivaVolunteers from "./VivaVolunteers";


function asOrganization(me: OrganizationJSON) : Organization {
    let ret: Organization = new Organization(me.name);
    ret.contactName = me.contact;
    ret.phone = me.phone;
    ret.email = me.email;
    ret.phone = me.phone;
    ret.allowsCourtOrdered = me.courtOrdered === "true";
    ret.phone = me.phone;
    ret.filters = me.activities;
    ret.website = me.website;
    ret.volunteerPage =  me.volunteerPage;
    ret.logo =  me.logoPage;
    return ret;
}


function setOrganizationsString(sink: PersistentObject, str: string) : void {
//      let test = str;
      let o  = JSON.parse(str);
      let arr: Array<OrganizationJSON> = o.organizations as Array<OrganizationJSON>;
    for (let i = 0; i < arr.length; i++) {
        let elt: OrganizationJSON = arr[i];
        let org: Organization = asOrganization(elt as OrganizationJSON);
        sink.organizations.push(org);

    }
    sink.buildFIlters();
}
function App() {


    const urlParams = new URLSearchParams(window.location.search);
    let directory: string = process.env.PUBLIC_URL + "/VivaVolunteersOrganizations.json";




    // eslint-disable-next-line
   const [dataread, setDataRead] = useState<boolean>(false);


    const doRedraw = () => {
        // Function implementation for the callback
         setDataRead(!dataread);
    };

    window.addEventListener('resize', doRedraw);

    let hardCodeJson = JsonString;

    let sink: PersistentObject  = PersistentObject.getInstance()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/VivaVolunteersOrganizations.json'); // Replace with your desired URL
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: string = await response.text();
                    setOrganizationsString(PersistentObject.getInstance(),data );
                    setDataRead(true);
                    //           HandleOrganization.setOrganizationsData(PersistentObject.getInstance().organizations);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

 //   if(!PersistentObject.hasData())
//         setOrganizationsString(sink, JsonString);




    //   let identifier = " <!-- App.tsx -->";
    return (
        <div className="org-content">
            <div className="top-component">
            <VivaVolunteers    />
            <br/>
            <FilterButtons onchange={doRedraw}  />
            </div>
          <br/>
             <HandleOrganization filename={(directory as string)}  />;
        </div>
    )
        ;
}

export default App;