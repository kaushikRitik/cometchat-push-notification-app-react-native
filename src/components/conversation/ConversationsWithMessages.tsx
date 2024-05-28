import React, { useEffect, useState } from "react";
import { CometChatConversationsWithMessages, CometChatUIKit } from "@cometchat/chat-uikit-react-native";
import { CometChat, CometChatNotifications } from "@cometchat/chat-sdk-react-native";
import { LogOut } from "../../resources";
import { SCREENS_CONSTANTS } from "../../CONSTS";

const ConversationsWithMessages = ({ navigation, route }: any) => {
  const [user, setUser] = useState<any>();
  const [group, setGroup] = useState<any>();
  const { params } = route;
  console.log('ConversationsWithMessages params - ',JSON.stringify(params))
  const conversationsConfiguration = {
    showBackButton: true,
    backButtonIcon: LogOut,
    onBack: () => {
      CometChatNotifications.unregisterPushToken().then(res=>{
        console.log('unregisterPushToken', res);
      })
      CometChatUIKit.logout()
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: SCREENS_CONSTANTS.LOGIN,
            },
          ],
        })
      }, 1000)
    },
  }
  useEffect(() => {
    if (params && params.receiverType === "user" && params.senderUid) {
      CometChat.getUser(params.senderUid).then((user) => {
        console.log({ user });
        setUser(user);
      });
    } else if (params && params.receiverType === "group") {
      CometChat.getGroup(params.guid).then((group) => {
        setGroup(group);
      });
    }
  }, []);

  if (user)
    return (
      <CometChatConversationsWithMessages
        user={user}
        messagesConfigurations={{
          messageListConfiguration: {
            messageRequestBuilder: new CometChat.MessagesRequestBuilder()
              .setUID(user.uid)
              .setLimit(20),
          },
        }}
        conversationsConfiguration={conversationsConfiguration}
      />
    );
  if (group)
    return (
      <CometChatConversationsWithMessages
        group={group}
        messagesConfigurations={{
          messageListConfiguration: {
            messageRequestBuilder: new CometChat.MessagesRequestBuilder()
              .setGUID(group.guid)
              .setLimit(20),
          },
        }}
        conversationsConfiguration={conversationsConfiguration}
      />
    );
    return (
      <CometChatConversationsWithMessages
        conversationsConfiguration={conversationsConfiguration}
      />
    );
};

export default ConversationsWithMessages;
