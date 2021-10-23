import React from 'react';
// import Loadable from 'ui-component/Loadable';

// project imports
// import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
// const FormDynamic = lazy(() => import('../pages/formDynamic/index'));
import FormDynamic from '../pages/formDynamic/index'

const FormDynamicRouter = {
    path: '/FormDynamic/',
    element: <FormDynamic />,
    // children: [
    //     {
    //         path: '/pages/login/login3',
    //         element: <AuthLogin3 />
    //     },
    // ]
};

export default FormDynamicRouter;
