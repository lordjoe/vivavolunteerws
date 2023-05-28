
import React, {useEffect, useState} from 'react';
import Organization from "./Organization";
import organization from "./Organization";

 class PersistentObject{
    private static instance: PersistentObject;
     public organizations:   Organization[] = [];
     public allFilters: Set<string> = new Set();
     public activeFilters: Set<string> = new Set();
      public  static numberOrganizations = 42;


      public buildFIlters() : void {
          this.allFilters.clear();
          for (const argument of this.organizations) {
              for(const s   of argument.filters)
                  this.allFilters.add(s);
          }
      }


     public static hasData() : boolean {
         return PersistentObject.instance.organizations.length > 0;
     }

     public static hasAllData() : boolean {
         return PersistentObject.instance.organizations.length < PersistentObject.numberOrganizations;
     }

     private constructor() {}

    public static getInstance(): PersistentObject {
        if (!PersistentObject.instance) {
            PersistentObject.instance = new PersistentObject();
        }
        return PersistentObject.instance;
    }

     static buildDate(dateStr: string | undefined) : Date {
         if(dateStr) {
             let items: string[] = dateStr.split("-");
             let year: number = parseInt(items[1]);
             let month: number = parseInt(items[2]) - 1;
             let day: number = parseInt(items[3]);

             return new Date(year,month,day);
         }
         else {
             return new Date();
         }
     }

     static stringFromDate(d: Date) :string {
         return d.toDateString();
     }
 }

export default PersistentObject;