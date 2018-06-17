import * as React from 'react';
import { Card, CardBody, CardHeader, CardFooter, CardTitle, CardSubtitle, Container, Row, Col,   Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Progress,Table, ButtonGroup
   } from 'reactstrap';
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
import { Bar, Line } from 'react-chartjs-2';
import {BrowserRouter as Router, HashRouter, Link, Route, Switch} from "react-router-dom";
import NavItems from "./../../config/SideMenu"
import DefaultHeader from "./DefaultHeader";
import Routes from "./../../config/routes";
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: brandPrimary,
        borderColor: 'rgba(255,255,255,.55)',
        data: [65, 59, 84, 84, 51, 55, 40],
      },
    ],
  };
  
  const cardChartOpts1 = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent',
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent',
          },
  
        }],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
            max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
          },
        }],
    },
    elements: {
      line: {
        borderWidth: 1,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    }
  }

  
export default class Dashboard extends React.Component<any, any> {
    constructor(props:any, context:any) {
        super(props, context);
    }
    public render(){
        return <div className="animated fadeIn">
           <Row>
                <Col xs="12" sm="6" lg="3">
                    <Card className="text-white bg-primary">
                        <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                            <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                        </div>
                    </Card>
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <Card className="text-white bg-primary">
                        <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                            <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                        </div>
                    </Card>
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <Card className="text-white bg-primary">
                        <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                            <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                        </div>
                    </Card>
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <Card className="text-white bg-primary">
                        <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                            <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>User</th>
                    <th className="text-center">Country</th>
                    <th>Usage</th>
                    <th className="text-center">Payment Method</th>
                    <th>Activity</th>
                  </tr>
                  </thead>
                  <tbody></tbody>
                  </Table>
                </Col>
            </Row>
        </div>
    }
   
}
