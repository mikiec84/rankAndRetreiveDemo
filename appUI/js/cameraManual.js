$(document).ready(function () {

// Initializing Variables

	var PublishChannel = 'rank-retrieve-user-query',
		SubscribeChannel = 'rank-retrieve-user-query',
	    
	    inputQuestion = $('#inputQuestion'),
	    inputQuestionSubmit = $("#inputQuestionSubmit"),
	    documentList = $("#document-list"),
	    queryResultList = $("#queryResultList"),
	    queryAsked = $("#queryAsked"),
	    loading = $("#loading"),

	    pub_key = 'pub-c-50d4121d-e37d-44a1-a89f-659aff7bacb8',
	    sub_key = 'sub-c-1d0ea8b6-4c13-11e7-8e91-0619f8945a4f';


// Init pubnub with keys
	var pubnub = new PubNub({
	    subscribeKey: sub_key,
	    publishKey: pub_key,
	    ssl: true
	})
	var queryManualList = {
        					"messagecode":"0",
        					"command":"query-list"
        				}
    console.log(queryManualList)
	pub_publish(queryManualList);

// Subscribes and Listens to the retrieve and rank query messages

	pubnub.subscribe({
		channels: [SubscribeChannel],
	})

	pubnub.addListener({
	    message: function(m) {
	        console.log(m.message)
	        var msg = m.message;
	        if(msg.messagecode == '0' && msg.messagetype == "resp") {
	        	updateManualList(msg.userManual)
	        }else if(msg.messagecode == '1' && msg.messagetype == "resp") {
	        	console.log(msg.apidata.response.docs)
	        	queryAsked.text("Search Query : "+msg.userQuery);

	        	updateQueryAnswer(msg.apidata.response.docs)
	        }
	    }
	})

// Trigger click event on Enter Keypress 
	inputQuestionSubmit.keypress(function (e) {
	 	var key = e.which;
	 	if(key == 13){
	    	inputQuestionSubmit.click();
	    	return false;  
	  	}
	});



/******************************************************************
    Function    : Input Query message
    Channel     : 'rank-retrieve-user-query'
    Description : Publishes the user query data to pubnub block
*******************************************************************/
	inputQuestionSubmit.click(function (event) {
		loading.text("Querying Results ... ");
		queryResultList.empty();
        var queryMessage = {
        					"messagecode":"1",
        					"command":"query-req",
        					"manual":documentList.val(),
        					"userQuery":inputQuestion.val()
        				}
        console.log(queryMessage)
        if(inputQuestion.val().length != 0){
        	pub_publish(queryMessage);
        	inputQuestion.val("");
        }
    });

/***************************************************************************
    Function    : updateManualList()
    Parameters  : 'userManual' - list from solr collection
    Description : Fetches the usermanual list from block and displays in UI
****************************************************************************/
	function updateManualList(userManual){
	   console.log(userManual)
	};

/***********************************************************************************
    Function    : updateQueryAnswer()
    Parameters  : 'apidata' - QueryAnswer list from R&R service
    Description : Fetches the Query Answer list from R&R Service and displays in UI
************************************************************************************/
function updateQueryAnswer(apidata){
	loading.empty();
	for (var i = 0; i < apidata.length; i++) {
		console.log(apidata.length)
		var userData = {
				QueryTitle : apidata[i].title[0],
				QueryAnswer : apidata[i].body[0],
			}
		var userTemplate = [   '<div id="mainContainer" class="col-sm-10 col-md-10 col-lg-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">',
	                                '<fieldset class="majorpoints">',
	                                '<legend class="majorpointslegend">{{QueryTitle}}</legend>',
	                                '<div id="ansContainer" class="hiders" style="display:none">',
	                                    '<div class="media-body" >',
	                                        '<small class="text-muted" >{{QueryAnswer}}</small>',
	                                    '</div>',
	                                '</div>',
	                                '</br>',
	                            '</div>',
	                            '</br>'].join("\n");
		
			var userQueryResultList = Mustache.render(userTemplate, userData);
		queryResultList.append(userQueryResultList);
	};
	// Expand and close the Query Answer Div 
	$('.majorpoints').click(function(){
	    $(this).find('.hiders').toggle();
	});
};

/******************************************************************
    Function    : pub_publish()
    Channel     : 'rank-retrieve-user-query'
    Description : Publishes the user query to R&R Watson Service
*******************************************************************/
	function pub_publish(pub_msg){
		pubnub.publish({
		        message: pub_msg,
		        channel: PublishChannel,
		        sendByPost: false, // true to send via post
		        storeInHistory: true, //override default storage options
		    },
		    function (status, response) {
		    	// console.log(response)
		        // handle status, response
		    }
		);
	};
});
