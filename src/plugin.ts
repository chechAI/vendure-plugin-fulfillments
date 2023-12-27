import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import path from 'path';

import { AdminResolver } from './api/admin-resolver';
import { adminApiExtensions } from './api/api-extensions';

@VendurePlugin({
    imports: [PluginCommonModule],
    entities: [],
    adminApiExtensions: {
        schema: adminApiExtensions,
        resolvers: [
            AdminResolver
        ],
    },
    providers: [],
    compatibility: '^2.0.0',
})

export class FulfillmentsPlugin {
    static uiExtensions: AdminUiExtension = {
        extensionPath: path.join(__dirname, 'ui'),
        routes: [{ route: 'fulfillments', filePath: 'routes.ts' }],
        providers: ['providers.ts'],
        translations: { en: path.join(__dirname, 'i18n-messages/en.json'), }
    };
}
