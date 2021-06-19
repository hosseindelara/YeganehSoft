import { Button, ButtonGroup } from "@material-ui/core";
import { statusRender } from "../../types";
import { FormUSerType } from "../../types/userType";

type propsCheck = {
    data: FormUSerType
    handelSwich: Function
}

export default function User({ data, handelSwich }: propsCheck): JSX.Element {
    return (
        <div >
            <p>{`${data.FirstName} ${data.LastName}`}</p>
            <small>{data.DateOfBirth}</small>
            <p>{data.EmailAddress}</p>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => handelSwich(statusRender.edit)} >edit</Button>
                <Button onClick={() => handelSwich(statusRender.delete)}>delete</Button>
            </ButtonGroup>
        </div>
    )
}
