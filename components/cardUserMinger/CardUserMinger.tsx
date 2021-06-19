
import { useState } from 'react';
import { Grid } from '@material-ui/core';
import EditUser from './../editUser/EditUser';
import DeleteUser from './../deleteUser/DeleteUser';
import User from './../user/User';
import { statusRender } from '../../types';
import { FormUSerType } from '../../types/userType';
import style from './cardUserMinger.module.scss';

type propsCheck = {
    data: FormUSerType
}

export default function CardUserMinger({ data }: propsCheck) {

    const [state, setState] = useState<statusRender>(statusRender.normal)

    const handelSwich = (status: statusRender): void => setState(status)

    return (
        <Grid item lg={6} md={6} sm={12} xs={12} >
            <div className={style.boxuser}>
                {
                    state === statusRender.edit ?
                        <EditUser id={data.UserAccountId} handelSwich={handelSwich} />
                        : state === statusRender.delete ?
                            <DeleteUser id={data.UserAccountId} handelSwich={handelSwich} />
                            : <User data={data} handelSwich={handelSwich} />
                }
            </div>
        </Grid>
    )
}
