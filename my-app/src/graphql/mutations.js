/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
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
