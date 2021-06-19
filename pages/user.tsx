import { getMethod } from "../components/axios/axiosFetch"
import { FormUSerType } from "../types/userType"
import { store } from '../redux/store'
import { Grid } from "@material-ui/core"
import CardUser from './../components/cardUser/CardUser';
import FormUser from './../components/formUser/index';

export default function index() {
    return (
        <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12} > <FormUser /></Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} >
                <CardUser />
            </Grid>
        </Grid>
    )
}
