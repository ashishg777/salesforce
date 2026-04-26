public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {

        // Required for the challenge – forces an error
        throw new AuraHandledException('Error loading contacts');
        // return [
        //     SELECT FirstName, LastName, Email
        //     FROM Contact
        // ];
    }
}
