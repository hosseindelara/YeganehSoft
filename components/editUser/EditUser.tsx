import { Button, Grid } from '@material-ui/core';
import FormUser from '../formUser/index';
import { statusRender } from '../../types/index';
import style from './edituser.module.scss';

type propsCheck = {
    id: number | undefined
    handelSwich: Function
}

export default function EditUser({ id, handelSwich }: propsCheck) {
    return (
        <div >
            <FormUser id={id} handelSwich={handelSwich} />
            <Grid className={style.cancelbtn} >
                <Button variant="contained" color="secondary" onClick={() => handelSwich(statusRender.normal)}  >cancel edit</Button>

            </Grid>
        </div>
    )
}
