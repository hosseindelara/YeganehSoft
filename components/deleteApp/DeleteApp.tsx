
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { Refresh } from '../../redux/actions/RefreshAction';
import { store } from '../../redux/store';
import { statusRender } from "../../types";
import { deleteMethod } from '../axios/axiosFetch';
import showtoast from '../toast';

type propscheck = {
    handelSwich: Function
    id: Number
}

export default function DeleteApp({ handelSwich, id }: propscheck) {

    const dispatch = useDispatch()

    const { baseUrl } = store.getState();

    const handleDelete = async () => {
        const data = await deleteMethod(`${baseUrl}/app`, id)
        showtoast('success', data.Message)
        handelSwich(statusRender.normal)
        dispatch(Refresh())
    }

    return (
        <div>
            <p>Are you sure you want to delete this app?</p>
            <Button variant="contained" color="primary" onClick={() => handelSwich(statusRender.normal)} >no</Button>
            <Button variant="contained" color="secondary" onClick={handleDelete} > yes</Button>
        </div>
    )
}
