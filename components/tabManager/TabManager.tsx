import React from 'react'
import { Grid } from '@material-ui/core';
import CardApp from './../cardApp/CardApp';
import FormApp from './../formApp/FormApp';
import OwnershipFrom from './../ownershipFrom/OwnershipFrom';
import OwnershipCard from './../ownershipCard/OwnershipCard';
import FormUser from './../formUser/index';
import CardUser from './../cardUser/CardUser';
import { tabEnum } from '../../types';

type PropsCheck = {
    statuse: tabEnum
}

export default function TabManager({ statuse }: PropsCheck): JSX.Element {
    return (
        <>
            {
                statuse == tabEnum.user ?
                    <div role="tabpanel" hidden={statuse !== tabEnum.user}>
                        <Grid item lg={12} md={12} sm={12} xs={12} > <FormUser /></Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <CardUser />
                        </Grid>
                    </div>
                    : null
            }
            {statuse === tabEnum.app ?
                <div role="tabpanel" hidden={statuse !== tabEnum.app}>
                    <Grid item lg={12} md={12} sm={12} xs={12} > <FormApp /></Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        <CardApp />
                    </Grid>
                </div>
                : null
            }
            {
                statuse === tabEnum.ownership ?
                    <div role="tabpanel" hidden={statuse !== tabEnum.ownership}>
                        <Grid item lg={12} xs={12} ><OwnershipFrom /></Grid>
                        <Grid item lg={12} xs={12} > <OwnershipCard /></Grid>
                    </div>
                    : null
            }
        </>
    )
}
