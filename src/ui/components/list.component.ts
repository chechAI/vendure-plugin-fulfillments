import { ChangeDetectionStrategy, Component} from '@angular/core';
import { SharedModule, TypedBaseListComponent } from '@vendure/admin-ui/core';

import { GetFulfillmentsDocument } from '../generated-types';

@Component({
    selector: 'fulfillment-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [SharedModule],
})

export class ListComponent
    extends TypedBaseListComponent<
        typeof GetFulfillmentsDocument,
        'fulfillments'
    > {
    filteredState: string | null = 'new';

    // Here we set up the filters that will be available
    // to use in the data table
    readonly filters = this.createFilterCollection()
        .addDateFilters()
        .addFilter({ name: 'state', type: { kind: 'text' }, label: 'State', filterField: 'state',})
        .addFilter({ name: 'method', type: { kind: 'text' }, label: 'Method', filterField: 'method',})
        .addFilter({ name: 'trackingCode', type: { kind: 'text' }, label: 'TrackingCode', filterField: 'trackingCode',})
        .connectToRoute(this.route);

    // Here we set up the sorting options that will be available
    // to use in the data table
    readonly sorts = this.createSortCollection()
        .defaultSort('createdAt', 'DESC')
        .addSort({ name: 'createdAt' })
        .addSort({ name: 'updatedAt' })
        .addSort({ name: 'method' })
        .connectToRoute(this.route);

    constructor() {
        super();
        super.configure({
            document: GetFulfillmentsDocument,
            getItems: data => data.fulfillments,
            setVariables: (skip, take) => ({
                options: {
                    skip,
                    take,
                    filter: {
                        // state: {
                        //     contains: this.searchTermControl.value ?? undefined,
                        // },
                        ...this.filters.createFilterInput(),
                    },
                    sort: this.sorts.createSortInput(),
                },
            }),
            refreshListOnChanges: [this.filters.valueChanges, this.sorts.valueChanges],
        });
    }
}
