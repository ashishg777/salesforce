import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

import { reduceErrors } from 'c/ldsUtils';

const COLUMNS = [
    { label: 'First Name', fieldName: FIRSTNAME_FIELD.fieldApiName },
    { label: 'Last Name', fieldName: LASTNAME_FIELD.fieldApiName },
    { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'email' }
];

export default class ContactList extends LightningElement {

    columns = COLUMNS;
    contactsList;
    error;

    @wire(getContacts)
    wiredContacts({ data, error }) {
        if (data) {
            this.contactsList = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.contactsList = undefined;
        }
    }

    // 👇 Getter Trailhead looks for
    get errors() {
        return reduceErrors(this.error);
    }
}
