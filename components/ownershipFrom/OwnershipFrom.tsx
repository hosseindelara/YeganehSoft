import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Grid, FormControl, InputLabel, Select, Button, LinearProgress } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { Refresh } from '../../redux/actions/RefreshAction';
import { FormOwnershipType } from '../../types/ownership';
import { getMethod, postMethod } from '../axios/axiosFetch';
import showtoast from '../toast';
import { dropdown } from '../../types';

export default function OwnershipFrom() {

    const [form, setForm] = useState({
        loading: true,
        app: [],
        user: []
    })

    const dispatch = useDispatch()

    const { baseUrl }: any = useSelector(state => state)

    const postFrom = async (formData: FormOwnershipType) => {
        const data = await postMethod(`${baseUrl}/ownership`, formData)
        showtoast('success', data.Message)
        dispatch(Refresh())
    }

    const checkForm = (formData: FormOwnershipType): void => {
        if (!formData.UseraccountId) {
            showtoast('error', 'Useraccount Id is mandatory')
        }
        else if (!formData.ApplicationId) {
            showtoast('error', 'Application Id is mandatory')
        }
        else if (!formData.State) {
            showtoast('error', 'State is mandatory')
        }
        else {
            postFrom(formData)
        }
    }

    const handelOnsubmit = (e: any): void => {
        e.preventDefault()
        let element: FormOwnershipType = {
            UseraccountId: '',
            ApplicationId: '',
            State: ''
        }

        for (let index = 0; index < e.target.length - 1; index++) {
            element = { ...element, [e.target[index].name]: e.target[index].value };
        }
        checkForm(element);
    }

    const dataFetching = async () => {
        const app = await getMethod(`${baseUrl}/app/dropdown`)
        const user = await getMethod(`${baseUrl}/user/dropdown`)
        setForm({
            app,
            user,
            loading: false
        })
    }

    useEffect(() => {
        dataFetching()
        return () => {

        }
    }, [])

    return (
        <>
            {
                form.loading ?
                    <>
                        <LinearProgress />
                        <Skeleton variant="rect" height={118} animation="wave" />
                    </>
                    :
                    <form method='POST' onSubmit={handelOnsubmit} className='formbox'  >
                        <Grid container spacing={2}
                            direction="row"
                            justify="center"
                            alignItems="center" >
                            <Grid item lg={4} md={6} sm={6} xs={12} >
                                <FormControl style={{ width: '100%' }} >
                                    <InputLabel>user</InputLabel>
                                    <Select name='UseraccountId' >
                                        {
                                            form.user.map((item: dropdown) => <option key={item.value.toString()} value={item.value}>{item.label}</option>)
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12} >
                                <FormControl style={{ width: '100%' }} >
                                    <InputLabel>app</InputLabel>
                                    <Select name='ApplicationId' >
                                        {
                                            form.app.map((item: dropdown) => <option key={item.value.toString()} value={item.value}>{item.label}</option>)
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12} >
                                <FormControl style={{ width: '100%' }} >
                                    <InputLabel>State</InputLabel>
                                    <Select name='State' >
                                        <option value='owned'>owned</option>
                                        <option value='revoked'>revoked</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12} >
                                <Button type='submit' variant="contained" color="primary"> add</Button>
                            </Grid>
                        </Grid>
                    </form>
            }
        </>
    )
}
