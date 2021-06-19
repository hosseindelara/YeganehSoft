import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, LinearProgress } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { OwnershipType } from '../../types/ownership';
import { getMethod } from '../axios/axiosFetch';

export default function OwnershipCard() {

    const { refreshPage, baseUrl }: any = useSelector(state => state)

    const [data, setData] = useState<OwnershipType[] | []>([])

    const dataFetching = async () => {
        const res = await getMethod(`${baseUrl}/ownership`)
        setData(res)
    }

    useEffect(() => {
        dataFetching()
        return () => {

        }
    }, [refreshPage])

    return (
        <Grid container spacing={2} >
            {data.length > 0 ? data.map((item: OwnershipType) => (
                <Grid item key={item.OwnershipId} lg={4} md={4} sm={6} xs={12} >
                    <div className='boxShowitem' >
                        <p>user id :<span>{item.UseraccountId}</span></p>
                        <p>app id :<span>{item.ApplicationId}</span></p>
                        <p>State :<span>{item.State}</span></p>
                    </div>
                </Grid>
            ))
                :
                <Grid item lg={4} md={4} sm={6} xs={12} >
                    <LinearProgress />
                    <Skeleton variant="rect" height={118} animation="wave" />
                </Grid>
            }

        </Grid>
    )
}
