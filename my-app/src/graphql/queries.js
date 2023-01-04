/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
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
