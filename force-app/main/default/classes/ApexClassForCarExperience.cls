public with sharing class ApexClassForCarExperience {

    @AuraEnabled //NOt Cacheable because we wnat to fetch the records everytime viewexperiences component is loaded.
    public static List<Car_Experience__c> fetchCarExperiencesByCarId(String carId) {

        return [SELECT Id,
        Name,
        Experience__c,
        LastModifiedDate,
        CreatedDate,
        CreatedBy.Name,
        CreatedBy.SmallPhotoUrl,
        CreatedBy.CompanyName FROM Car_Experience__c WHERE Car__c  = :carId ORDER BY CreatedDate DESC];

    }

}
