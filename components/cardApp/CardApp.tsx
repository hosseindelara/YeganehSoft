import { useState, useEffect } from "react";
import { Grid } from '@material-ui/core';
import { appType } from "../../types/appType"
import { useSelector } from "react-redux";
import { getMethod } from "../axios/axiosFetch";
import CardAppManager from './../cardAppManager/CardAppManager';

export default function CardApp(): JSX.Element {

    const { refreshPage, baseUrl }: any = useSelector(state => state)

    const [datafetch, setDatafetch] = useState<appType[]>([])

    const datafetching = async () => {
        const res = await getMethod(`${baseUrl}/app`)
        setDatafetch(res)
    }

    useEffect(() => {
        datafetching()
        
    }, [refreshPage])

    return (
        <Grid container spacing={2} >
            {
                datafetch.length > 0 &&
                (
                    datafetch.map((item: appType) => (<CardAppManager key={item.applicationId} data={item} />))
                )
            }
        </Grid>
    )

}
