import FormApp from './../components/formApp/FormApp';
import CardApp from './../components/cardApp/CardApp';
import { Grid } from '@material-ui/core';

export default function index() {
    return (
        <div>
            <FormApp />
            <Grid container spacing={2} >
                <CardApp />
            </Grid>
        </div>
    )
}

// export async function getServerSideProps() {

//     const { baseUrl } = store.getState();

//     let datauser: appType[] | [] = []

//     datauser = await getMethod(`${baseUrl}/app`)
//     return {
//         props: { datauser },
//     }
// }