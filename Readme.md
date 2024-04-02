# React Native Push Notification Sample App

CometChat Push Notification Sample App is a fully functional push notification app capable of one-on-one (private) and group messaging, and Calling. This sample app enables users to send and receive push notifications for text and multimedia messages like **images, videos, documents** and **Custom Messages**. Also, users can make push notifications for Audio and Video calls to other users or groups.

<hr>

## Pre-requisite
1. Login to the <a href="https://app.cometchat.io/" target="_blank">CometChat Dashboard</a>.
2. Select an existing app or create a new one.
3. Go to "API & Auth Keys" section and copy the `REST API` key from the "REST API Keys" tab.
4. Go to the "Extensions" section and Enable the Push Notifications extension.
5. Go to the "Installed" tab in the same section and open the settings for this extension and Set the version to `V2`.
6. Paste the `REST API Key` in the Settings.
7. Go to <a href="https://console.firebase.google.com/" target="_blank">Firebase Console</a> and get the Server Key for your app. Paste the Server Key in the settings and click on save.
8. Copy your app's `APP_ID`, `REGION` and `AUTH_KEY` from the Dashboard. These will be required in the next steps.

## Run the Sample App in Android

 To Run the sample push notifications app, do the following changes:

   You can Obtain your  *google-services.json* from [Firebase Console](https://console.firebase.google.com/)

   - Open the project in Android Studio.
   
   - Add `google-services.json` in **app** directory

   - Build and run the Sample App `react-native run-android`.

## IOS Installation 
  
  To Run the sample push notifications app, do the following changes:
  
  For FCM you can obtain your  *GoogleServices.plist* from [Firebase Console](https://console.firebase.google.com/)
  
  - Open the project in Xcode and navigate to select your push notification configuration:
      - APNS + Callkit (Recommended)
      - Firebase
        
  - Create certificates for your bundle ID as mentioned in our [documentation](https://prodocs.cometchat.com/docs/ios-extensions-enhanced-push-notification).
    
  - Build and run the Sample App `react-native run-ios`.
  
## Note
   CometChat provides two ways to implement push notifications for your IOS app. 
      - [Firebase](https://prodocs.cometchat.com/docs/ios-extensions-enhanced-push-notification)
      - [APNS (Supports Callkit)](https://prodocs.cometchat.com/docs/ios-extensions-enhanced-push-notification-apns)
      - 
   You can Obtain your  *APP_ID* and *API_KEY* from [CometChat-Pro Dashboard](https://app.cometchat.com/)

   You can Obtain your  *google-services.json* from [Firebase Console](https://console.firebase.google.com/)

   You can Obtain your  *GoogleServices.plist* from [Firebase Console](https://console.firebase.google.com/)

   
      
## 📝 Documentation

CometChat provides to implement push notifications for your app.

 1. [React-Native](https://prodocs.cometchat.com/docs/react-native-extensions-enhanced-push-notification)
