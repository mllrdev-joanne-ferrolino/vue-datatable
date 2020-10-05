import { Employee } from './../models/employee';
import { Customer } from "../models/customer";

export const Store = {
    customers: [{
        id: 1,
        name: "Juan",
        address: "Dgte",
        contactNumber: "231-9302"
    },
    {
        id: 2,
        name: "Pedro",
        address: "Sibulan",
        contactNumber: "238-4875"
    }] as Customer[],

    employees: [  {
        id: 1,
        name: "Anne",
        jobTitle: "HR"
    },
    {
        id: 2,
        name: "Marie",
        jobTitle: "CEO"
    }] as Employee[] 
};


export function useStore(){
    const customerStore = Store.customers;
    const employeeStore = Store.employees;
   
    return { customerStore, employeeStore }
}