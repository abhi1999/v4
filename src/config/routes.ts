import * as React from 'react';
import Loadable from 'react-loadable';

import DashBoard from './../components/dashboard/Dashboard';

function loading(){
    return React.createElement("div",{}, "Loading...");
}
const otherComponent = Loadable({
    loader: () => import('./../components/misc/InProgress'),
    loading: loading,
});

export default [
    { path: '/dashboard', name: 'Dashboard', component: DashBoard },
    { path: '/favorites', name: 'Favorites', component: otherComponent },
    { path: '/quotetocash', name: 'quotetocash', component: otherComponent },
    { path: '/quotetopay', name: 'quotetopay', component: otherComponent },
    { path: '/logistics', name: 'logistics', component: otherComponent },
    { path: '/automotiveplanning', name: 'automotiveplanning', component: otherComponent },
    { path: '/productmanagement', name: 'productmanagement', component: otherComponent }
  ];