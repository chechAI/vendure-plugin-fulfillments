import { CrudPermissionDefinition } from '@vendure/core';

export const FULFILLMENTS_PLUGIN_OPTIONS = Symbol('FULFILLMENTS_PLUGIN_OPTIONS');
export const loggerCtx = 'FulfillmentsPlugin';
export const fulfillmentPermission = new CrudPermissionDefinition('Fulfillment');