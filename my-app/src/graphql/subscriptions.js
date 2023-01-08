/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
      id
      Messages {
        items {
          id
          Text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      LastMessage {
        id
        Text
        chatroomID
        userID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
      id
      Messages {
        items {
          id
          Text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      LastMessage {
        id
        Text
        chatroomID
        userID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
      id
      Messages {
        items {
          id
          Text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      LastMessage {
        id
        Text
        chatroomID
        userID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      Text
      chatroomID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      Text
      chatroomID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      Text
      chatroomID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onCreateUser(filter: $filter, username: $username) {
      id
      username
      email
      Messages {
        items {
          id
          Text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onUpdateUser(filter: $filter, username: $username) {
      id
      username
      email
      Messages {
        items {
          id
          Text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onDeleteUser(filter: $filter, username: $username) {
      id
      username
      email
      Messages {
        items {
          id
          Text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
      id
      image
      title
      subtitle
      description
      price
      type
      bedroom
      garage
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
      id
      image
      title
      subtitle
      description
      price
      type
      bedroom
      garage
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
      id
      image
      title
      subtitle
      description
      price
      type
      bedroom
      garage
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSaved = /* GraphQL */ `
  subscription OnCreateSaved(
    $filter: ModelSubscriptionSavedFilterInput
    $owner: String
  ) {
    onCreateSaved(filter: $filter, owner: $owner) {
      id
      image
      title
      subtitle
      description
      price
      type
      bedroom
      garage
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSaved = /* GraphQL */ `
  subscription OnUpdateSaved(
    $filter: ModelSubscriptionSavedFilterInput
    $owner: String
  ) {
    onUpdateSaved(filter: $filter, owner: $owner) {
      id
      image
      title
      subtitle
      description
      price
      type
      bedroom
      garage
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSaved = /* GraphQL */ `
  subscription OnDeleteSaved(
    $filter: ModelSubscriptionSavedFilterInput
    $owner: String
  ) {
    onDeleteSaved(filter: $filter, owner: $owner) {
      id
      image
      title
      subtitle
      description
      price
      type
      bedroom
      garage
      createdAt
      updatedAt
      owner
    }
  }
`;
