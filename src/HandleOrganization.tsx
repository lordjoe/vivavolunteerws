
import React from 'react';
import {FilenameHolder} from "./Holders";




import  Filters   from './Filters';
import PersistentObject from "./PersistentObject";
import OrganizationJSON from "./OrganizationJSON";
import  OrganizationTable from "./OrganizationTable";


export  function setOrganizations(sink: PersistentObject,orgs: OrganizationJSON[]) {
    for (const org of orgs) {
        sink.organizations.push(org.asOrganization2());
    }
}

function HandleOrganization(props: FilenameHolder) {
//    const [organizations1, setOrganizationsData] = useState<Organization[]>([]);

    // let filename = props.filename;
    //
    //
    //
    // useEffect(() => {
    //     const fetchFileContent = async () => {
    //         try {
    //             const response = await fetch(filename);
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();
    //                if (Array.isArray(data.organizations)) {
    //                     setOrganizations(PersistentObject.getInstance(),data.organizations);
    //                    setOrganizationsData(PersistentObject.getInstance().organizations);
    //             }
    //             } catch (error) {
    //             alert('There was a problem fetching the file content:' + error);
    //         }
    //     };
    //
    //
    // }, [filename]);

    return (
        <div className="table-content ">
            {PersistentObject.hasData() ? (
                //                   <pre>{fileContent}</pre>
                    <OrganizationTable  organizations={PersistentObject.getInstance().organizations}/>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
export default HandleOrganization;