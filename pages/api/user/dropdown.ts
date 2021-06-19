import type { NextApiRequest, NextApiResponse } from 'next'
import userData from '../user.json'
import { USerType, dropdownUser } from '../../../types/userType'
const fs = require('fs');

const user = (req: NextApiRequest, res: NextApiResponse<dropdownUser[] | { Message: String }>) => {

    if (req.method === 'GET') {
        const list: dropdownUser[] = []
        userData.filter((item: USerType) => {
            list.push({ label: `${item.FirstName} ${item.LastName}`, value: item.UserAccountId })
        })
        res.status(200).json(list)
    }
    else {
        res.status(405).json({ Message: 'method invalid. valid method: GET ' })
    }

}
export default user

