import React from 'react';
// import Loadable from 'ui-component/Loadable';

// project imports
// import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
// const FormDynamic = lazy(() => import('../pages/formDynamic/index'));
import FormDynamic from '../components/views/formDynamic/index'
import Navbar from '../components/organisms/navbar'

const FormDynamicRouter = {
    path: '/',
    element: <Navbar />,
    children: [
        {
            path: '/FormDynamic/',
            element: <FormDynamic />
        },
    ]
};

export default FormDynamicRouter;
