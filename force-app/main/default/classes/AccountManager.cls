public with sharing class AccountManager {
    public AccountManager() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){

        return [select Id,Name from Account LIMIT 10];
        
    }


    //If we mention cacheble=true for imperative calls it throws DML exception
    @AuraEnabled
    public static List<Account> getAccountLimit(Integer numberOfRecords){

        return [select Id,Name from Account LIMIT :numberOfRecords];
        
    }

}
