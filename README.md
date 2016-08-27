# DislpioTrelloWidget
A Trello widget for Displio (http://getdisplio.com). Hope you can use this as example to write other widgets since the documentation is lack of some important details.

## Configuration

The following settings can be made in this widget:

* `trelloTitleText`: The text of the title bar
* `trelloShowBattery`: When set to `true`, the battery will be shown in percent in the title
* `trelloListId`: The `id` of the list you want to display (you may find this out by looking the trelle network traffic)
* `trelloAppId`: Get this here: https://trello.com/app-key
* `trelloToken`: Get this here: 
  * https://trello.com/1/connect?key=<trelloAppId>&name=DisplioTrello&response_type=token
  * https://trello.com/1/connect?key=<trelloAppId>&name=DisplioTrello&response_type=token&expiration=never (or here if you want the token to expire never)
    
  Don't forget to replace `<trelloAppId>` in this url.

## Displio api documentation

Some things I had to figure out since they are not documentaded yet:

* The documentation can be found here: http://developer.getdisplio.com/documentation/
* Another, small sample appliction can be found here: http://app.getdisplio.com/editor
* This the app should provide as configuration is available in the `conf` and `configuartion` object in **lowercase** (so the key `myKey` would become `mykey`)
* You can use this to dig deeper in whats predefined from Displio:
  * `console.log(JSON.stringify(conf));`
  * `console.log(JSON.stringify(displio));`
  * `console.log(JSON.stringify(event));`
  * `console.log(JSON.stringify(previousStatus));`
  
## Screenshots

Here are some screenshots of my configuration. Maybe it will help you.

![Screenshot](https://github.com/blaues0cke/DislpioTrelloWidget/blob/master/screenshot1.png?raw=true)
![Screenshot](https://github.com/blaues0cke/DislpioTrelloWidget/blob/master/screenshot2.png?raw=true)
![Screenshot](https://github.com/blaues0cke/DislpioTrelloWidget/blob/master/screenshot3.png?raw=true)
![Screenshot](https://github.com/blaues0cke/DislpioTrelloWidget/blob/master/screenshot4.png?raw=true)
![Screenshot](https://github.com/blaues0cke/DislpioTrelloWidget/blob/master/screenshot5.png?raw=true)
![Screenshot](https://github.com/blaues0cke/DislpioTrelloWidget/blob/master/screenshot6.png?raw=true)
