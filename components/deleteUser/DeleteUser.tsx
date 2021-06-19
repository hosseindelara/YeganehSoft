import { useDispatch } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import { store } from '../../redux/store';
import { deleteMethod } from '../axios/axiosFetch';
import showtoast from '../toast';
import { statusRender } from '../../types/index';
import { Refresh } from '../../redux/actions/RefreshAction';

type propsCheck = {
    id: number | undefined
    handelSwich: Function
}

const { baseUrl } = store.getState();

export default function DeleteUser({ id, handelSwich }: propsCheck) {

    const dispatch = useDispatch()

    const handelDelete = async () => {
        const data = await deleteMethod(`${baseUrl}/user`, id)
        showtoast('success', data.Message)
        handelSwich(statusRender.normal)
        dispatch(Refresh())
    }

    return (
        <div>
            <p>Are you sure you want to delete this user?</p>
            <Grid item lg={12} md={12} sm={12} xs={12} >
                <Button variant="contained" color="primary" onClick={handelDelete}  >yes</Button>
                <Button variant="contained" color="secondary" onClick={() => handelSwich(statusRender.normal)} >no</Button>
            </Grid>
        </div>
    )
}
