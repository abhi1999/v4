import * as React from "react";
import * as ReactDOM from "react-dom";
import Notifications from 'react-notification-system-redux';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import '@coreui/icons/css/coreui-icons.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './../styles/vendor.css'

import { Card, CardBody, CardHeader, CardFooter, CardTitle, CardSubtitle, Container } from 'reactstrap';

import DefaultLayout from "./layouts/DefaultLayout"

import {BrowserRouter as Router, HashRouter, Link, Route, Switch} from "react-router-dom";


declare let Settings:any;
interface IAppProps{
    loading:boolean,
    loadData:()=>{},
    loadTLEData:()=>{},
    notifications:any
}
export default class App extends React.Component<IAppProps, any>{
    constructor(props:IAppProps){
        super(props);
    }
    componentDidMount(){
        this.props.loadTLEData();
    }
    componentWillReceiveProps(nextProps){
        console.log('this props' ,this.props);
    }
    render(){
        const defaultStyle ={
            NotificationItem:{
                DefaultStyle:{
                    margin:"10px, 5px, 2px, 1px"
                }
            }
        }
        console.log('APP', this.props)
        return (
            <div id="wrapper" className="toggled">
                <HashRouter>
                    <Switch>
                            <Route path='/page' render={(props) => (
                                <div>page</div>
                                )}/>
                            <Route path="/home" name="Home" render={(props) => (
                                <div>Home</div>
                                )}/>
                            <Route path="/" name="default" component={DefaultLayout}/>
                        </Switch>
                </HashRouter>
                <Notifications notifications={this.props.notifications} style={defaultStyle} />
            </div>
        );
    }
}