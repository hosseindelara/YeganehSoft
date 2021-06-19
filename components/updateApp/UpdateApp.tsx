import { Grid, Button } from "@material-ui/core";
import { statusRender } from "../../types";
import FormApp from "../formApp/FormApp";

type propscheck = {
    handelSwich: Function
    id: Number
}

export default function UpdateApp({ handelSwich, id }: propscheck) {
    return (
        <div>
            <FormApp id={id} handelSwich={handelSwich} />
            <Grid className='cancelbtn' >
                <Button variant="contained" color="secondary" onClick={() => handelSwich(statusRender.normal)} >cancel Edit app</Button>

            </Grid>
        </div>
    )
}
