import React from 'react';
// import Loadable from 'ui-component/Loadable';

// project imports
// import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
// const FormDynamic = lazy(() => import('../pages/formDynamic/index'));
import FormDynamic from '../components/views/formDynamic/index'
import CreateFrom from '../components/views/createFrom/index'
import Trackers from '../components/views/trackers/tracker'
import Navbar from '../components/organisms/navbar'

const FormDynamicRouter = {
    path: '/',
    element: <Navbar />,
    children: [
        {
            path: '/FormDynamic/',
            element: <FormDynamic />
        },
        {
            path: '/CreateFrom/',
            element: <CreateFrom />
        },
        {
            path: '/CreateFrom/:id',
            element: <CreateFrom />
        },
        {
            path: '/Trackers/',
            element: <Trackers />
        },
    ]
};

export default FormDynamicRouter;
