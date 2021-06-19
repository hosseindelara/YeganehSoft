import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, TextField, Button, LinearProgress } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { getMethod, postMethod, putMethod } from '../axios/axiosFetch';
import showtoast from '../toast';
import { apptypeForm } from '../../types/appType';
import { store } from '../../redux/store';
import { statusRender } from '../../types';
import { Refresh } from '../../redux/actions/RefreshAction';

type propsCheck = {
    id?: Number | undefined
    handelSwich?: any
}

export default function FormApp({ id, handelSwich }: propsCheck) {

    const dispatch = useDispatch()

    const { baseUrl } = store.getState();

    const [DataUpdate, setDataUpdate] = useState<apptypeForm>({
        Name: '',
        Thumbnail: '',
        loading: true
    })

    const dataFetching = async () => {
        const data = await getMethod(`${baseUrl}/app/${id}`)
        setDataUpdate({ ...data, loading: false })
    }

    useEffect(() => {
        if (id) {
            dataFetching()
        }
        return () => {

        }
    }, [id])

    const updateForm = async (formData: apptypeForm) => {
        const data = await putMethod(`${baseUrl}/app/`, formData)
        showtoast('success', data.Message)
        handelSwich(statusRender.normal)
        dispatch(Refresh())
    }

    const postFrom = async (formData: apptypeForm) => {
        const data = await postMethod(`${baseUrl}/app/`, formData)
        showtoast('success', data.Message)
        dispatch(Refresh())
    }

    const checkForm = (formData: apptypeForm): void => {
        if (!formData.Name) {
            showtoast('error', 'Name app is mandatory')
        }
        else if (!formData.Thumbnail) {
            showtoast('error', 'Thumbnail app is mandatory')
        }
        else {
            DataUpdate.Name ?
                updateForm({ ...formData, applicationId: DataUpdate.applicationId })
                : postFrom(formData)
        }
    }


    const handleSubmit = (e: any): void => {
        e.preventDefault()
        let element: apptypeForm = {
            Name: '',
            Thumbnail: '',
        }

        for (let index = 0; index < e.target.length - 1; index++) {
            element = { ...element, [e.target[index].name]: e.target[index].value };
        }
        checkForm(element);

    }
    return (
        <>{
            id && DataUpdate.loading ?
                <>
                    <LinearProgress />
                    <Skeleton variant="rect"  height={118} animation="wave" />
                </>
                :
                <form autoComplete='off' onSubmit={handleSubmit} className={id ? '' : 'formbox'} >
                    <Grid container spacing={2}
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <Grid item lg={4} md={4} sm={4} xs={12} >
                            <TextField defaultValue={DataUpdate.Name ? DataUpdate.Name : ''} name='Name' type='text' label="Name app" />
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12} >
                            <TextField defaultValue={DataUpdate.Thumbnail ? DataUpdate.Thumbnail : ''} name='Thumbnail' type='text' label="Thumbnail app  (link)" />
                        </Grid>
                        <Grid item lg={4} md={4} sm={4} xs={12} >
                            <Button type='submit' variant="contained" color="primary">{id ? 'edit app' : 'add'}</Button>
                        </Grid>
                    </Grid>
                </form>
        }
        </>
    )
}
