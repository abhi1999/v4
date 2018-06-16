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


import TLEMain from './tle-main/TLEMain';
import Sidebar from './tle-sidebar/Sidebar';
import TLEDetails from "./tle-details/TLEDetails";

import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import TLEGridContainer from "./../containers/tle/TLEGridContainer"

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
            <Router>
                <div id="wrapper" className="toggled">
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <Route exact={true} path="/" render={()=>{
                                return <TLEMain title={Settings.appTitle}/>
                            }}/>
                            <Route exact={true} path="/home" render={()=>{
                                return <TLEMain title={Settings.appTitle}/>
                            }}/>
                            <Route exact={true} path="/tlegrid" render={()=>{
                                return <TLEGridContainer/>
                            }}/>
                            <Route exact={true} path="/details/:poOrderNumber" render={({match})=>{
                                return <TLEDetails title={Settings.appTitle}/>
                            }}/>
                        </div>
                    </div>
                    <Notifications notifications={this.props.notifications} style={defaultStyle} />
                </div>
            </Router>
        );
    }
}