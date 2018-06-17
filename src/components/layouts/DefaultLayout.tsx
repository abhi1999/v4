import * as React from 'react';
import { Card, CardBody, CardHeader, CardFooter, CardTitle, CardSubtitle, Container } from 'reactstrap';
import {
    AppAside,
    AppBreadcrumb,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppSidebarNav,
  } from '@coreui/react';

import {BrowserRouter as Router, HashRouter, Link, Route, Switch} from "react-router-dom";
import NavItems from "./../../config/SideMenu"
import Header from "./Header";
import Routes from "./../../config/routes";

export default class DefaultLayout extends React.Component<any, any> {
    constructor(props:any, context:any) {
        super(props, context);
    }
    public render() {
        console.log(Routes);
        return ( 
                <div className="app"> 
                <AppHeader fixed>
                    <Header />
                </AppHeader>
                <div className="app-body">
                    <AppSidebar fixed display="lg">
                        <AppSidebarHeader></AppSidebarHeader>
                        <AppSidebarForm></AppSidebarForm>
                        <AppSidebarNav navConfig={NavItems} {...this.props} />
                        <AppSidebarFooter></AppSidebarFooter>
                        <AppSidebarMinimizer />
                    </AppSidebar>
                    <main className="main">
                        <Container>
                            <Switch>
                            {
                                Routes.map((route, idx) => {
                                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                                        <div>
                                                            <route.component {...props} />
                                                        </div>
                                                        )} />)
                                                : (null);
                                })
                            }
                            </Switch>
                        </Container>
                    </main>
                  
                </div>
                <AppFooter>
                        Footer
                </AppFooter>
            </div>
        );
    }
}
