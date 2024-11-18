// assets
// import { IconDashboard } from '@tabler/icons';

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const itemList = [{
    id: 'formDynamic',
    title: 'Form',
    type: 'group',
    children: [
        {
            id: 'form',
            title: 'Form',
            type: 'item',
            url: '/FormDynamic/',
            icon: <i>B</i>,
            breadcrumbs: false
        }
    ]
},
{
    id: 'design',
    title: 'Design',
    type: 'group',
    children: [
        {
            id: 'design',
            title: 'Design',
            type: 'item',
            url: '/FormDynamic/',
            icon: <i>A</i>,
            breadcrumbs: false
        }
    ]
}];

export default itemList;
