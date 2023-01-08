/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Messages {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      Text
      chatroomID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        Messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSaved = /* GraphQL */ `
  query GetSaved($id: ID!) {
    getSaved(id: $id) {
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
export const listSaveds = /* GraphQL */ `
  query ListSaveds(
    $filter: ModelSavedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSaveds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
