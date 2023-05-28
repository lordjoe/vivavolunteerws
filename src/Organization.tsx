import React from 'react';



import PersistentObject from "./PersistentObject";
class Organization  {


    public name: string  = "unknown"
    public website:  string  =  "";
    public volunteerPage:  string  =  "";
    public contactName: string = "";
    public address: string = "";
    public email: string = "";
    public phone: string = "";
    public logo: string  =  "";
    public allowsCourtOrdered:  boolean  = false;
    public filters: string[]  = [];


    public constructor(name: string) {
        this.name = name;

    }

    public isActive() : boolean
    {
        let filters = PersistentObject.getInstance().activeFilters;
        if(filters.size === 0)
            return true;
        for (let i = 0; i < this.filters.length; i++) {
            const filter : string = this.filters[i];
            if(filters.has(filter))
                return true;
        }
        return false;
    }


}

export default  Organization;