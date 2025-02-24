---
description: This guide helps you to connect your Redis database to Appsmith
sidebar_position: 13
---

# How to use Redis as a Datasource on Appsmith

### Integrating the Redis datasource into Appsmith

To connect your Redis Database instance to Appsmith as a datasources

1. Open [Applications Page](https://app.appsmith.com/applications/), select the application to want to configure and click on **Edit**.
2. On the navigation panel to the left side, Click on **+** next to **Datasources** Tab.
3. (Optional) Now click on **+ Create New**, if you already have connected a Datasource previously.
4. Under **Databases**, Select **Redis**
5. Enter a name to your Redis datasource (e.g. _My Redis Database_)
6.  Enter your Redis Database configurations inside the _Connection_ section.

    * Enter "0" as _Database Number_, if you are connecting to the database for the first time.

    <!-- <img src="/img/redis-datasource-form.png" alt="Click to expand" data-size="original"/> -->
    ![Click to expand](/img/redis-datasource-form.png)
7. Enter your username and password to your Redis Database under _Authentication_ section.
8. Once done, click on **Save** and then click on **Test**.
9. If the Pop up notifies you that _My Redis Database datasource is valid_, that means your Redis Database's configuration is correct and is to ready to connect to your _Appsmith Application_. If it Pop up notifies you about any other error, please check your Redis configuration.

> Refer to [Redis Datasource](/reference/datasources/querying-redis.md) documentation for more information.

### Using Redis as a Datasource

#### Create keys

Lets create some keys in your Redis Database.

1. After you have added your Datasource, click on **New Query +**.

![Existing Datasorce - New Query](/img/redis-new-query.png)

1. Edit your Query name, from **Query1** to **CreatingKeys**
2.  From the _Query_ field, create some keys _(Enter one by one)_.

    ```
    SET DEVELOPER "me"
    ```

    ```
    SET ENV "DEV"
    ```

    ```
    SET DATE "Thursday, 7 October, 2021"
    ```

![Createing Queries](/img/redis-create-query.png)

1. Done. We successfully created some keys.

#### Fetching Keys

To fetch keys from Redis Database, lets run queries.

1. Again create a new query, and name it as **GetKeys**
2.  From the _Query_ field, lets fetch our existing keys.

    ```
    GET DEVELOPER
    ```

    Response : me

    ```
    GET ENV
    ```

    Response : dev

    ```
    GET DATE
    ```

    Response : Thursday, 7 October, 2021
3. Once you fetch all keys successfully,then you are ready to proceed further.

#### Binding the data to a widget

1. After running each query, select your desired **Widget** Type, and click to _Add to canvas_

![Create Widget](/img/redis-create-widget.png)

1. Now, change the widget name, and its attributes, according to your needs.

![Edit Widget](/img/redis-edit-widget.png)

1. Done, not that hard right?

### Demo Canvas

![Demo](/img/redis-comp-demo-canvas.png)

Thats all, now you know how to use Redis as a data source for your Appsmith application.
