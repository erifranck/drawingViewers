import { firebaseAPI } from "constants/servicesPath"
export const getFollowersRequest = async () => {
      const response = await fetch(`${ firebaseAPI }/followers`)
      return response.json()
}