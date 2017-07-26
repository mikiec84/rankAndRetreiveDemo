export default (request) => { 
    // Required modules
    const db = require('kvstore'); // Database module
    const xhr = require('xhr'); // xmlHTTP request module
    const basicAuth = require('codec/auth');

    var username = 'f851cbdf-69a3-4d97-86f6-e79f6fab1bf9';
    var password = 'p3lF7i2rwbwC';
    var clusterID = 'sc72dd28f2_faec_449e_87c6_45467d94fcb0';
    var solrCollection = 'EOS550D';
    var userQuery = request.message.userQuery
    var auth = basicAuth.basic(username,password);

    var kvstoreKEY = "cameraManualQuery";
    var model_dict = {"collectionName":"EOS550D","model":"Cannon EOS 550D"};
    
    var url = 'https://watson-api-explorer.mybluemix.net/retrieve-and-rank/api/v1/solr_clusters/'+clusterID+'/solr/'+solrCollection+'/select';
     // http options for the rest call.
    const http_options = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization":auth
        },
        "body":"q="+userQuery+"&wt=json&fl=title,body"
    };  

    function dbget()
    {
          return db.get(kvstoreKEY).then((database_value)=>{
            console.log(database_value);
                if(database_value){
                    request.userManual = database_value;     
                }
                else{
                    request.userManual = null;   
                }
            
            return request;
        });
    }  
    // Checking for operation selected in the UI
    // 0 - Query for camera manual list from kv store
    if(request.message.messagecode === "0"){
        console.log("In message code 0 - fetch manual list");
        // db.set(kvstoreKEY,model_dict);
        return dbget().then((x)=>{
            request.message.userManual = x.userManual;
            request.message.messagetype = "resp";
            return request;
        });
    }
    // Checking for operation selected in the UI
    // 1 - Query for user questions from the camera manual 
    else if(request.message.messagecode === "1"){
        console.log("In message code 1 - answer query");

        return xhr.fetch(url, http_options).then((x) => {
            console.log(url);
            var docs = JSON.parse(x.body)
            console.log("CONVERSION API REPLY ----->",docs);
            request.message.apidata = docs;
            request.message.messagetype = "resp";
            return request;
        });
    }
    return request.ok();
};
