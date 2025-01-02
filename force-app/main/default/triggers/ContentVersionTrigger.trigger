trigger ContentVersionTrigger on ContentVersion (before insert) {
    List<ContentVersion> rcds = Trigger.new;
    for (ContentVersion rcd : rcds) {
        // future to upload file to Google Drive
        rcd.ExternalDocumentInfo2 = 'Google_DRIVE_ID';
        rcd.ExternalDataSourceId = '0XCJ8000000TN2cOAG';
        rcd.ContentBodyId = null;
        rcd.ContentLocation = 'E';
        rcd.Origin = 'H';
    }
}