import type { NextApiRequest, NextApiResponse } from 'next'
import userData from '../user.json'
import { USerType } from '../../../types/userType'
const fs = require('fs');

const user = (req: NextApiRequest, res: NextApiResponse<USerType[] | { Message: String }>) => {

    const GetMethod = (): void => res.status(200).json(userData)


    const PostMethod = (): void => {
        fs.readFile('./pages/api/user.json', 'utf8', function callback(err: any, data: any) {

            const dataForm = { ...req.body, UserAccountId: new Date().getTime() }
            const finaly = [...JSON.parse(data), dataForm]

            fs.writeFile('./pages/api/user.json', JSON.stringify(finaly), 'utf8', () => { })

            res.status(201).json({ Message: 'user created successfully' })

        })
    }

    const PUTMethod = (): void => {
        fs.readFile('./pages/api/user.json', 'utf8', function callback(err: any, data: any) {

            const dataForm = req.body
            const DataFile = JSON.parse(data)
            const otherUser = DataFile.filter((item: any) => item.UserAccountId !== dataForm.UserAccountId)
            const finaly = [...otherUser, dataForm]

            fs.writeFile('./pages/api/user.json', JSON.stringify(finaly), 'utf8', () => { })

            res.status(200).json({ Message: 'user update successfully' })

        })
    }

    const checkForm = (DataForm: USerType, methodName: string): void => {
        if (!DataForm.FirstName) {
            res.status(400).json({ Message: 'Name is mandatory' })
        }
        else if (!DataForm.LastName) {
            res.status(400).json({ Message: 'Last name is mandatory' })
        }
        else if (!DataForm.EmailAddress) {
            res.status(400).json({ Message: 'Email address is mandatory' })
        }
        else if (!DataForm.Password) {
            res.status(400).json({ Message: 'Password is mandatory' })
        }
        else if (!DataForm.DateOfBirth) {

            res.status(400).json({ Message: 'Date of birth is mandatory' })
        }
        else {
            if (methodName === "POST") {
                PostMethod()
            }
            else if (methodName === "PUT") {

                if (!DataForm.UserAccountId) {
                    res.status(400).json({ Message: 'User account id is mandatory' })
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

