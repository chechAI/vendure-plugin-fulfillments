import { registerRouteComponent } from '@vendure/admin-ui/core';

// import { DetailComponent } from './components/detail.component';
import { ListComponent } from './components/list.component';
// import { GetFulfillmentDocument } from './generated-types';

export default [
    registerRouteComponent({
        path: '',
        component: ListComponent,
        title: 'Fulfillments',
        breadcrumb: 'Fulfillments',
    }),
    // registerRouteComponent({
    //     path: ':id',
    //     component: DetailComponent,
    //     query: GetFulfillmentDocument,
    //     title: 'Fulfillment',
    //     entityKey: 'fulfillment',
    //     getBreadcrumbs: entity => [
    //         {
    //             label: 'Fulfillments',
    //             link: ['/extensions', 'fulfillments'],
    //         },
    //         {
    //             label: `#${entity?.id} (${entity?.method})`,
    //             link: [],
    //         },
    //     ],
    // }),
];
