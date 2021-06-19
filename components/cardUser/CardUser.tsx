import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { USerType } from "../../types/userType";
import { getMethod } from "../axios/axiosFetch";
import CardUserMinger from './../cardUserMinger/CardUserMinger';
import { useSelector } from "react-redux";

export default function CardUser(): JSX.Element {

    const { refreshPage, baseUrl }: any = useSelector(state => state)

    const [datafetch, setDatafetch] = useState<USerType[]>([])

    const datafetching = async () => {
        const res = await getMethod(`${baseUrl}/user`)
        setDatafetch(res)
    }

    useEffect(() => {
        datafetching()
        return () => {

        }
    }, [refreshPage])


    return (
        <Grid container spacing={2} >
            {
                datafetch.length > 0 &&
                (
                    datafetch.map((item: USerType) => (<CardUserMinger key={item.UserAccountId} data={item} />))
                )
            }
        </Grid>
    )
}
