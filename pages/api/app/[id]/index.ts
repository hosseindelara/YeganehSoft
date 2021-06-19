import type { NextApiRequest, NextApiResponse } from 'next'
import { appType } from '../../../../types/appType';
import appData from '../../app.json'

const fs = require('fs');

export default function index(req: NextApiRequest, res: NextApiResponse<appType | { Message: string }>) {

    const id: any = req.query.id

    if (req.method === 'GET') {
        if (id) {
            const find: appType = appData.filter(item => item.applicationId === parseInt(id))[0]

            if (find?.applicationId) {
                res.status(200).json(find)
            }
            else {
                res.status(404).json({ Message: 'app not Found' })
            }
        }
    }
    else if (req.method === 'DELETE') {
        if (id) {

            fs.readFile('./pages/api/app.json', 'utf8', function callback(err: any, data: any) {

                const finaly = JSON.parse(data).filter((item: appType) => item.applicationId !== parseInt(id))

                fs.writeFile('./pages/api/app.json', JSON.stringify(finaly), 'utf8', () => { })

                res.status(200).json({ Message: 'app DELETE successfully' })

            })

        }
    }
    else {
        res.status(405).json({ Message: 'method invalid. valid method: GET DELETE' })
    }
}
