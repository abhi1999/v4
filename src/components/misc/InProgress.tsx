import * as React from 'react';
import { Card, CardBody, CardHeader, CardFooter, CardTitle, CardSubtitle } from 'reactstrap';

interface ITLEDetailsProps{
    title:string
}
export default class TLEDetails extends React.Component<ITLEDetailsProps, any> {
    constructor(props:ITLEDetailsProps, context:any) {
        super(props, context);
    }
    public render() {
        return (
            <Card>
                <CardHeader>Component Development in Progres</CardHeader>
                <CardBody>
                    <CardTitle></CardTitle>
                    <CardSubtitle></CardSubtitle>
                    <div>
                      In Progress
                    </div>
                </CardBody>
                <CardFooter> </CardFooter>
          </Card>);
    }
}
