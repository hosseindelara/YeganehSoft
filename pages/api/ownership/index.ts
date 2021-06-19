import type { NextApiRequest, NextApiResponse } from 'next';
import { FormOwnershipType, OwnershipType, } from '../../../types/ownership';
import Ownership from '../ownership.json'
const fs = require('fs');

export default function user(req: NextApiRequest, res: NextApiResponse<OwnershipType[] | { Message: String }>) {

    const GetMethod = (): void => res.status(200).json(Ownership)

    const PostMethod = (): void => {
        fs.readFile('./pages/api/ownership.json', 'utf8', function callback(err: any, data: any) {

            const dataForm = { ...req.body, RegisteredDate: new Date().getTime(), OwnershipId: new Date().getTime() }
            const finaly = [...JSON.parse(data), dataForm]

            fs.writeFile('./pages/api/ownership.json', JSON.stringify(finaly), 'utf8', () => { })

            res.status(201).json({ Message: 'ownership created successfully' })

        })
    }

    const checkForm = (DataForm: FormOwnershipType): void => {
        if (!DataForm.UseraccountId) {
            res.status(400).json({ Message: 'Useraccount Id is mandatory' })
        }
        else if (!DataForm.ApplicationId) {
            res.status(400).json({ Message: 'Application Id is mandatory' })
        }
        else if (!DataForm.State) {
            res.status(400).json({ Message: 'State is mandatory' })
        }
        else {
            PostMethod()
        }
    }

    switch (req.method) {
        case 'GET':
            GetMethod()
            break;
        case 'POST':
            checkForm(req.body)
            break;
        default:
            res.status(405).json({ Message: 'method invalid. valid method: GET POST ' })
            break;
    }


}


