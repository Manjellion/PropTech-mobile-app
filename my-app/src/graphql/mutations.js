/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      Text
      chatroomID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      Text
      chatroomID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      Text
      chatroomID
      userID
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createSaved = /* GraphQL */ `
  mutation CreateSaved(
    $input: CreateSavedInput!
    $condition: ModelSavedConditionInput
  ) {
    createSaved(input: $input, condition: $condition) {
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
export const updateSaved = /* GraphQL */ `
  mutation UpdateSaved(
    $input: UpdateSavedInput!
    $condition: ModelSavedConditionInput
  ) {
    updateSaved(input: $input, condition: $condition) {
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
export const deleteSaved = /* GraphQL */ `
  mutation DeleteSaved(
    $input: DeleteSavedInput!
    $condition: ModelSavedConditionInput
  ) {
    deleteSaved(input: $input, condition: $condition) {
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
