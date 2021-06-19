import type { NextApiRequest, NextApiResponse } from 'next'
import { dropdown } from '../../../types';
import { appType } from '../../../types/appType';
import appData from '../app.json'
const fs = require('fs');

const user = (req: NextApiRequest, res: NextApiResponse<dropdown[] | { Message: String }>) => {

    if (req.method === 'GET') {
        const list: dropdown[] = []
        appData.map((item: appType) => {
            list.push({ label: `${item.Name}`, value: item.applicationId })
        })
        res.status(200).json(list)
    }
    else {
        res.status(405).json({ Message: 'method invalid. valid method: GET ' })
    }

}
export default user

