import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Button, Grid, LinearProgress } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton';
import { FormUSerType } from '../../types/userType'
import showtoast from '../toast'
import { getMethod, postMethod, putMethod } from '../axios/axiosFetch'
import { Refresh } from '../../redux/actions/RefreshAction'
import { statusRender } from '../../types'

export default function FormUser({ id, handelSwich }: any) {

    const dispatch = useDispatch()

    const { baseUrl }: any = useSelector(state => state)

    const [DataUpdate, setDataUpdate] = useState<FormUSerType>({
        FirstName: '',
        LastName: '',
        EmailAddress: '',
        Password: '',
        DateOfBirth: '',
        loading: true
    })

    const dataFetching = async () => {
        const data = await getMethod(`${baseUrl}/user/${id}`)
        setDataUpdate({ ...data, loading: false })
    }

    useEffect(() => {
        if (id) {
            dataFetching()
        }
        return () => {

        }
    }, [id])

    const updateForm = async (formData: FormUSerType) => {
        const data = await putMethod(`${baseUrl}/user`, formData)
        showtoast('success', data.Message)
        handelSwich(statusRender.normal)
        dispatch(Refresh())
    }

    const postFrom = async (formData: FormUSerType) => {
        const data = await postMethod(`${baseUrl}/user`, formData)
        showtoast('success', data.Message)
        dispatch(Refresh())
    }

    const checkForm = (formData: FormUSerType): void => {
        if (!formData.FirstName) {
            showtoast('error', 'Name is mandatory')
        }
        else if (!formData.LastName) {
            showtoast('error', 'Last Name is mandatory')
        }
        else if (!formData.EmailAddress) {
            showtoast('error', 'Email Address is mandatory')
        }
        else if (!formData.Password) {
            showtoast('error', 'Password is mandatory')
        }
        else if (!formData.DateOfBirth) {
            showtoast('error', 'Date Of Birth is mandatory')
        }
        else {
            DataUpdate.FirstName ?
                updateForm({ ...formData, UserAccountId: DataUpdate.UserAccountId })
                : postFrom(formData)
        }
    }


    const handleSubmit = (e: any): void => {
        e.preventDefault()
        let element: FormUSerType = {
            FirstName: '',
            LastName: '',
            EmailAddress: '',
            Password: '',
            DateOfBirth: '',
        }

        for (let index = 0; index < e.target.length - 1; index++) {
            element = { ...element, [e.target[index].name]: e.target[index].value };
        }
        checkForm(element);

    }

    return (
        <>
            {
                id && DataUpdate.loading ?
                    <>
                        <LinearProgress />
                        <Skeleton variant="rect" height={118} animation="wave" />
                    </>
                    :
                    <form autoComplete='off' onSubmit={handleSubmit} className={id ? '' : 'formbox'} >
                        <Grid container spacing={2}
                            direction="row"
                            justify="center"
                            alignItems="center" >
                            <Grid item lg={4} md={6} sm={6} xs={12} >
                                <TextField defaultValue={DataUpdate.FirstName} name='FirstName' type='text' label="First Name" />
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12} >
                                <TextField defaultValue={DataUpdate.LastName ? DataUpdate.LastName : ''} name='LastName' type='text' label="Last Name" />
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12} >
                                <TextField defaultValue={DataUpdate.EmailAddress ? DataUpdate.EmailAddress : ''} name='EmailAddress' type='email' label="Email Address" />
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12} >
                                <TextField defaultValue={DataUpdate.Password ? DataUpdate.Password : ''} name='Password' type='Password' label="Password" />
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12} >
                                <TextField defaultValue={DataUpdate.DateOfBirth ? DataUpdate.DateOfBirth : ''} name='DateOfBirth' type='text' label="DateOfBirth" />
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12} >
                                <Button type='submit' variant="contained" color="primary">{id ? 'update User' : 'add'}</Button>
                            </Grid>
                        </Grid>
                    </form>
            }
        </>
    )
}


