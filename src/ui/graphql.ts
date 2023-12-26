import gql from 'graphql-tag';

export const FULFILLMENT_FRAGMENT = gql`
    fragment Fulfillment on Fulfillment {
        id
        state
        nextStates
        createdAt
        updatedAt
        method
        lines {
            orderLineId
            quantity
        }
        trackingCode
    }
`;
export const GET_FULFILLMENTS = gql`
    query GetFulfillments($options: FulfillmentListOptions) {
        fulfillments(options: $options) {
            items {
                ...Fulfillment
            }
            totalItems
        }
    }
    ${FULFILLMENT_FRAGMENT}
`;

export const GET_FULFILLMENT = gql`
    query GetFulfillment($id: ID!) {
        fulfillment(id: $id) {
            ...Fulfillment
        }
    }
    ${FULFILLMENT_FRAGMENT}
`;

// export const CREATE_FULFILLMENT = gql`
//     mutation CreateFulfillment($input: CreateFulfillmentInput!) {
//         createFulfillment(input: $input) {
//             ...Fulfillment
//         }
//     }
//     ${FULFILLMENT_FRAGMENT}
// `;

// export const UPDATE_FULFILLMENT = gql`
//     mutation UpdateFulfillment($input: UpdateFulfillmentInput!) {
//         updateFulfillment(input: $input) {
//             ...Fulfillment
//         }
//     }
//     ${FULFILLMENT_FRAGMENT}
// `;
