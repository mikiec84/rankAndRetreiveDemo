# Retrieve and Rank demo Event handler - Pubnub Block (Functions)

## Pubnub Block (function) Creation

## Step 1 :

Login to the Pubnub account with the valid credentials.

![alt-tag](https://github.com/shyampurk/rankAndRetreiveDemo/blob/master/screenshots/block/pubnub_blockappCreation.png)

## Step 2 :

Click the "CREATE NEW APP" by giving a name to your APP.

![alt-tag](https://github.com/shyampurk/rankAndRetreiveDemo/blob/master/screenshots/block/listofapps.png)

## Step 3 :

Click on the newly created APP.You can see the Demo keyset for the new application created.

## Step 4 :

Click on the Demo keyset and click on the (Blocks) Functions (on the left side).

![alt-tag](https://github.com/shyampurk/rankAndRetreiveDemo/blob/master/screenshots/block/pubnub_keys.png)

## Step 5 :

Create a new Block by giving the block name and description to the block.

![alt-tag](https://github.com/shyampurk/rankAndRetreiveDemo/blob/master/screenshots/block/block_rr_app.png)

## Step 6 :

Create the Event Handler by clicking CREATE button at the bottom.

![alt-tag](https://github.com/shyampurk/rankAndRetreiveDemo/blob/master/screenshots/block/startEH.png)

## Step 7 :

Give the Name of the Event handler, Channel to communicate with the block and the option of when block code should execute (Before Publish or Fire) .

![alt-tag](https://github.com/shyampurk/rankAndRetreiveDemo/blob/master/screenshots/block/block_channel_creation.png)

## Step 8 :

Copy the block code in the text area from [here](https://github.com/shyampurk/rankAndRetreiveDemo/blob/master/block/cameraBlock.js), and save it. Update the Watson Retrieve and Rank API credentials on the code 
( As per step 4 and 8 of "Rank and Retrieve Service - Setting up" section in main [README](https://github.com/shyampurk/rankAndRetreiveDemo/blob/master/README.md) file)

Replace the username,password and id's in the following line in block code :

    Username ==> line number 7 (replace with username got from step 4 under "Rank and Retrieve Service - Setting up" section)
    Password ==> line number 8 (replace with Password got from step 4 under "Rank and Retrieve Service - Setting up" section)
    Cluster ID ==> line number 9 (replace with Cluster ID got from step 8 under "Rank and Retrieve Service - Setting up" section)
    Solr Collection name ==> line number 10 (replace with Collection name got from step 8 under "Rank and Retrieve Service - Setting up" section)

## Step 9 :

Click on the Start module button(top right) to start the block.

![alt-tag](https://github.com/shyampurk/rankAndRetreiveDemo/blob/master/screenshots/block/block_start.png)

## Step 10 :

Your block code is now running.

![alt-tag](https://github.com/shyampurk/rankAndRetreiveDemo/blob/master/screenshots/block/block_running.png)
