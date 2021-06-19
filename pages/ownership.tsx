
import OwnershipFrom from './../components/ownershipFrom/OwnershipFrom';
import OwnershipCard from './../components/ownershipCard/OwnershipCard';
import { Grid } from '@material-ui/core';
export default function index() {
    return (
        <Grid container spacing={2}>
            <Grid item lg={12} xs={12} ><OwnershipFrom /></Grid>
            <Grid item lg={12} xs={12} > <OwnershipCard /></Grid>
        </Grid>
    )
}
