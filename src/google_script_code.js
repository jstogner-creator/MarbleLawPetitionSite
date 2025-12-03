// COPY THIS ENTIRE FILE INTO YOUR GOOGLE APPS SCRIPT EDITOR
// This version handles BOTH JSON and Form Data (URLSearchParams)
// ensuring that 'JSON Parse failed' errors fall back gracefully to parameters.

function doPost(e) {
  var lock = LockService.getScriptLock();
  
  // Wait for up to 10 seconds for other requests to finish.
  lock.tryLock(10000);
  
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data;
    
    // -----------------------------------------------------------
    // SMART DATA PARSING
    // -----------------------------------------------------------
    
    // Attempt 1: Try parsing JSON (if e.postData exists)
    try {
      if (e.postData && e.postData.contents) {
        data = JSON.parse(e.postData.contents);
      }
    } catch (err) {
      // JSON failed, data remains undefined.
    }

    // Attempt 2: If JSON failed, try standard form parameters
    if (!data) {
      data = e.parameter;
    }
    
    // -----------------------------------------------------------
    // HEADERS SETUP
    // -----------------------------------------------------------
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", 
        "Full Name", 
        "Email", 
        "Phone", 
        "State", 
        "Case Type", 
        "Amount Paid", 
        "Experience", 
        "Consent Given"
      ]);
    }
    
    // -----------------------------------------------------------
    // SAVE DATA
    // -----------------------------------------------------------
    sheet.appendRow([
      new Date(), 
      data.fullName || "", 
      data.email || "", 
      data.phone || "", 
      data.state || "", 
      data.caseType || "", 
      data.amountPaid || "", 
      data.experience || "",
      data.consent || "false"
    ]);
    
    // -----------------------------------------------------------
    // RESPONSE
    // -----------------------------------------------------------
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}