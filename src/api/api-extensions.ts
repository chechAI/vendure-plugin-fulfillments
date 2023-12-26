import gql from 'graphql-tag';

export const commonApiExtensions = gql`
    type FulfillmentList implements PaginatedList {
        items: [Fulfillment!]!
        totalItems: Int!
    }

    extend type Query {
        fulfillments(options: FulfillmentListOptions): FulfillmentList!
        fulfillment(id: ID!): Fulfillment
    }

    # Auto-generated at runtime
    input FulfillmentListOptions
`;

export const adminApiExtensions = gql`
    ${commonApiExtensions}

    extend type Mutation {
        createFulfillment(input: CreateFulfillmentInput!): Fulfillment!
        updateFulfillment(input: UpdateFulfillmentInput!): Fulfillment!
    }

    input CreateFulfillmentInput {
        state: String
        nextStates: String
        method: String
        trackingCode: String
    }

    input UpdateFulfillmentInput {
        id: ID!
        state: String
        nextStates: String
        method: String
        trackingCode: String
    }
`;
