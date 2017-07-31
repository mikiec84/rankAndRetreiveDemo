# Watson Rank and Retrieve API Demo

Cannon EOS550D camera user manual with rank and retrieve IBM watson service

# Document Conversion Service - Setting up

## Step 1 :

Login to the Bluemix account with the valid credentials, and goto Catalog.

## Step 2 :

Select the Document Conversion Service under the Watson Services. 

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/doc_conv/doc_conversion_select.png)

## Step 3 :

Give the service name and scroll down the page,select the Free plan (you can see more about pricing options in that page) and click on the "create" button.

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/doc_conv/create_service.png)

## Step 4 :

Once you create the service, it will redirect you to the homepage of the service. There, click on the "Service Credentials" to get the apikey to access the Document Conversion api. Make a note of this API key.

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/doc_conv/get_cred.png)

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/doc_conv/create_success.png)


# Rank and Retrieve Service - Setting up

## Step 1 :

Login to the Bluemix account with the valid credentials, and goto Catalog.

## Step 2 :

Select the Rank and Retrieve Service under the Watson Services. 

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/rank_retrieve/rr_select.png)

## Step 3 :

Give the service name and scroll down the page,select the Free plan (you can see more about pricing options in that page) and click on the "create" button.

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/rank_retrieve/rr_create_service.png)

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/rank_retrieve/rr_price_plan.png)

## Step 4 :

Once you create the service, it will redirect you to the homepage of the service. There, click on the "Service Credentials" to get the apikey to access the Rank and Retrieve api. Make a note of this API key.

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/rank_retrieve/rr_cred.png)


# Working of Rank and Retrieve Api Demo

## Step 1 : 

Open Watson's Rank and Retrieve Service [page](https://watson-retrieve-and-rank.ng.bluemix.net/) . Now we will create solr cluster & collection and then upload the document and questions.

## Step 2 :

Select the Conversation Service you have created earlier steps

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/rank_retrieve/rrConversionStart.png)

## Step 3 :

Select the Rank and Retrieve Service you have created earlier steps

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/rank_retrieve/rrStart.png)

## Step 4 : Cluster Creation

Select the Create cluster button from the left side panel

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/rank_retrieve/creatingNewCluster.png)

## Step 5 :

Provide proper cluster name and specify the size of cluster

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/rank_retrieve/createCluster.png)

## Step 6 : Collection Creation

Select Create Collection button to setup a collection for our documents 

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/rank_retrieve/create_coll.png)

## Step 7 :

Set a collection name and select language type and click create

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/rank_retrieve/createCollection.png)

## Step 8 :

These are our cluster key and collection name

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/rank_retrieve/rrcluster.png)

## Step 9 : Upload Document

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/rank_retrieve/rr_uploaddoc.png)

## Step 10 : Upload Sample Query Questions

![alt-tag](https://github.com/AravindNico/rankAndRetreiveDemo/blob/master/screenshots/rank_retrieve/rr_uploadQue.png)
