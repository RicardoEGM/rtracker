// assets
// import { IconDashboard } from '@tabler/icons';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

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
            icon: DynamicFormIcon,
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
            icon: DesignServicesIcon,
            breadcrumbs: false
        }
    ]
}];

export default itemList;
