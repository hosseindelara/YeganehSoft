import type { NextApiRequest, NextApiResponse } from 'next'
import { appType } from '../../../types/appType';
import appData from '../app.json'
const fs = require('fs');

const user = (req: NextApiRequest, res: NextApiResponse<appType[] | { Message: String }>) => {

    const GetMethod = (): void => res.status(200).json(appData)


    const PostMethod = (): void => {
        fs.readFile('./pages/api/app.json', 'utf8', function callback(err: any, data: any) {

            const dataForm = { ...req.body, applicationId: new Date().getTime() }
            const finaly = [...JSON.parse(data), dataForm]

            fs.writeFile('./pages/api/app.json', JSON.stringify(finaly), 'utf8', () => { })

            res.status(201).json({ Message: 'app created successfully' })

        })
    }

    const PUTMethod = (): void => {
        fs.readFile('./pages/api/app.json', 'utf8', function callback(err: any, data: any) {

            const dataForm = req.body
            const DataFile = JSON.parse(data)
            const otherUser = DataFile.filter((item: any) => item.applicationId !== dataForm.applicationId)
            const finaly = [...otherUser, dataForm]

            fs.writeFile('./pages/api/app.json', JSON.stringify(finaly), 'utf8', () => { })

            res.status(200).json({ Message: 'app update successfully' })

        })
    }

    const checkForm = (DataForm: appType, methodName: string): void => {
        if (!DataForm.Name) {
            res.status(400).json({ Message: 'Name is mandatory' })
        }
        else if (!DataForm.Thumbnail) {
            res.status(400).json({ Message: 'Thumbnail is mandatory' })
        }
        else {
            if (methodName === "POST") {
                PostMethod()
            }
            else if (methodName === "PUT") {

                if (!DataForm.applicationId) {
                    res.status(400).json({ Message: 'application Id is mandatory' })
                }
                else {
                    PUTMethod()
                }

            }
        }
    }

    switch (req.method) {
        case 'GET':
            GetMethod()
            break;
        case 'POST':
            checkForm(req.body, 'POST')
            break;
        case 'PUT':
            checkForm(req.body, 'PUT')
            break;
        default:
            res.status(405).json({ Message: 'method invalid. valid method: GET POST PUT' })
            break;
    }


}
export default user

