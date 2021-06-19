import { useState } from "react"
import { Grid } from '@material-ui/core';
import { statusRender } from "../../types";
import DeleteApp from './../deleteApp/DeleteApp';
import App from "../app/App";
import UpdateApp from './../updateApp/UpdateApp';
import { appType } from "../../types/appType";

type propsCheck = {
    data: appType
}

export default function CardAppManager({ data }: propsCheck) {

    const [state, setState] = useState<statusRender>(statusRender.normal)

    const handelSwich = (status: statusRender): void => setState(status)

    return (
        <Grid item lg={4} md={4} sm={6} xs={12} >
            <div className='boxShowitem'>
                {
                    state === statusRender.edit ?
                        <UpdateApp handelSwich={handelSwich} id={data.applicationId} />
                        : state === statusRender.delete ?
                            <DeleteApp handelSwich={handelSwich} id={data.applicationId} />
                            : <App handelSwich={handelSwich} data={data} />
                }
            </div>
        </Grid>
    )
}
