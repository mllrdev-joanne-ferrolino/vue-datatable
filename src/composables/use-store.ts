import { IEmployee } from '../models/IEmployee';
import { ICustomer } from "../models/ICustomer";

export const Store = {
    customers: [{
        id: 1,
        name: "Juan",
        address: "Dgte",
        contactNumber: "231-9302",
        purchases: 3
    },
    {
        id: 2,
        name: "Pedro",
        address: "Sibulan",
        contactNumber: "238-4875",
        purchases: 12
    }] as ICustomer[],

    employees: [  {
        id: 1,
        name: "Anne",
        jobTitle: "HR",
        proficiency: 30,
        office: "Philippines",
        image: "https://bit.ly/3lucXQS" 
    },
    {
        id: 2,
        name: "Marie",
        jobTitle: "CEO",
        proficiency: 90,
        office: "Sweden",
        image: "https://bit.ly/3nOxuBN"
    }] as IEmployee[] 
};


export function useStore(){
    const customerStore = Store.customers;
    const employeeStore = Store.employees;
   
    return { customerStore, employeeStore }
}