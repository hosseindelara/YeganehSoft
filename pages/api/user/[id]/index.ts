import type { NextApiRequest, NextApiResponse } from 'next'
import userData from '../../user.json'
import { USerType } from '../../../../types/userType'
const fs = require('fs');

export default function index(req: NextApiRequest, res: NextApiResponse<USerType | { Message: string }>) {

    const id: any = req.query.id

    if (req.method === 'GET') {
        if (id) {
            const find: USerType = userData.filter(item => item.UserAccountId === parseInt(id))[0]

            if (find?.UserAccountId) {
                res.status(200).json(find)
            }
            else {
                res.status(404).json({ Message: 'user not Found' })
            }
        }
    }
    else if (req.method === 'DELETE') {
        if (id) {

            fs.readFile('./pages/api/user.json', 'utf8', function callback(err: any, data: any) {

                const finaly = JSON.parse(data).filter((item: USerType) => item.UserAccountId !== parseInt(id))
                fs.writeFile('./pages/api/user.json', JSON.stringify(finaly), 'utf8', () => { })

                res.status(200).json({ Message: 'user DELETE successfully' })

            })

        }
    }
    else {
        res.status(405).json({ Message: 'method invalid. valid method: GET DELETE' })
    }
}
