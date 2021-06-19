import { appType } from "../../types/appType";
import { ButtonGroup, Button } from '@material-ui/core'
import { statusRender } from '../../types';

type propsCheck = {
    data: appType
    handelSwich: Function
}

export default function App({ data, handelSwich }: propsCheck): JSX.Element {
    return (
        <div>
            <p>{data.Name}</p>
           <div> <a href={data.Thumbnail} target="_blank" rel="noopener noreferrer" >viwe photo</a></div>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => handelSwich(statusRender.edit)} >edit</Button>
                <Button onClick={() => handelSwich(statusRender.delete)}>delete</Button>
            </ButtonGroup>
        </div>
    )
}
