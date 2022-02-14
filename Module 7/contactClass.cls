public with sharing class contactClass {
        @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(Id accId){
        try {
            System.debug(accId);
            // if (accID != null) {
                List<Contact> lstCon = new List<Contact>([select Id, FirstName, Account.Name, Department, MobilePhone, Email from Contact where AccountId = :accID]);
                System.debug(lstCon);
                return lstCon;
            // }
            // return null;

        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsList(){
        try {
            return [select Id, Name, Account.Name, Department, MobilePhone, Email from Contact];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

