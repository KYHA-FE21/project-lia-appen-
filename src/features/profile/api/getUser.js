/*user

  "id": 1,
  "name": "",
  "email": "",
  "password": "",
  "type": "",
  "bio": "",
  "attibutes_id": "",
  "links": [
    {
      "title": "",
      "url": ""
    }
  ]

  "attibutes": [
		{
			"id": "",
			"period": "",
			"profession": "",
			"badges": [""],
			"location": "",
			"work_type": ""
		}
	]
*/
export const getUser = (id) => {
    return fetch(`/user/id=${id}`)
}

export const getAttributes = (id) => {
    return fetch(`/attributes/id=${id}`)
}

const useUser = async (id) => {
  
  /* const response = await getUser(id)
  const data = JSON.parse(response)
  const attributes = fetch(data.attributes_id) */
  
  const data = {
    "id": 1,
    "name": "Sofie Larsson",
    "email": "sofie.l@gmail.com",
    "phone": "+4670 - 16 71 245",
    "password": "123456",
    "type": "company",
    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat urna risus, vel tincidunt quam lobortis varius. Ut metus mi, lacinia luctus eros eu, vestibulum luctus metus. Maecenas luctus leo nec facilisis consectetur. Phasellus tincidunt felis urna, vitae consectetur lorem iaculis sit amet. Quisque porta dapibus tempus. In volutpat mattis blandit.",
    "attibutes_id": 2,
    "links": [
      {
        "title": "",
        "url": ""
      }
    ]
  }

  const attributes = {
    "id": 2,
    "period": "28 nov 2022 - 4 apr 2023",
    "profession": "Front end utvecklare",
    "badges": ["Node","JS","HTML","CSS","React"],
    "location": "Gävle",
    "work_type": "HiG"
  }

  const dataComp = {
    "id": 1,
    "name": "Mooi Design",
    "email": "info@mooi.com",
    "phone": "+4670 - 16 71 245",
    "password": "123456",
    "type": "company",
    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat urna risus, vel tincidunt quam lobortis varius. Ut metus mi, lacinia luctus eros eu, vestibulum luctus metus. Maecenas luctus leo nec facilisis consectetur. Phasellus tincidunt felis urna, vitae consectetur lorem iaculis sit amet. Quisque porta dapibus tempus. In volutpat mattis blandit.",
    "attibutes_id": 2,
    "links": [
      {
        "title": "mooidesign.com",
        "url": "http://mooidesign.com"
      }
    ]
  }

  const attributesComp = {
    "id": 2,
    "period": "15 jul 2022 - 4 apr 2023",
    "profession": "Skapar framtidens webbplatser",
    "badges": [],
    "location": "Gävle",
    "work_type": "Remote"
  }

  return { data, attributes }

}

export default useUser