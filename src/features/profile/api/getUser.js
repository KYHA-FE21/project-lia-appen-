export const getUser = async (id) => {
    return await fetch(`http://localhost:3004/user/${id}`).then(
      res => res.json()
    )
}

export const getAttribute = async (id) => {
    return await fetch(`http://localhost:3004/attribute/${id}`).then(
      res => res.json()
    )
}

const useUser = async (id) => {
  
  const userData = await getUser(id)
  const userAttribute = await getAttribute(userData.attribute_id)   

  return {userData, userAttribute}

}

export default useUser