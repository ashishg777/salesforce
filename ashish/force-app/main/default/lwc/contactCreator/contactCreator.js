import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// Import fields
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {

    fields = [
        FIRSTNAME_FIELD,
        LASTNAME_FIELD,
        EMAIL_FIELD
    ];

    handleSuccess(event) {
        const recordId = event.detail.id;

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success!',
                message: 'Contact created with Id: ' + recordId,
                variant: 'success'
            })
        );
    }
}
