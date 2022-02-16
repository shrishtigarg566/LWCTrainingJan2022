public with sharing class oppDeatils {
    public oppDeatils() {

    }
    @AuraEnabled
    public static List<Opportunity> getRelatedOpps(ID accId, String str){
        try {
            
            str = '%'+str+'%';
            return [SELECT  Id, Name, Amount, StageName FROM  Opportunity WHERE  AccountID = :accID AND  Name LIKE :str];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
