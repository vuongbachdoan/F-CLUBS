import { API, graphqlOperation } from "aws-amplify"
import { createClub } from "../../../graphql/mutations"

export const createClubFunc = async (club) => {
    return await API.graphql(
        graphqlOperation(
            createClub,
            {
                input: club
            }
        )
    )
}