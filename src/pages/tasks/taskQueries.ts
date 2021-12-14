import {gql} from "@apollo/client";

export const GET_TASKS = gql`
    query GetTasks {
        tasks {
            id
            title
            description
            logs {
                id
                type
                by: user {
                    username
                }
                prevValue
                newValue
            }
            assignees {
                id
                username
            }
        }
    }
`;
