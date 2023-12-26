import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Allow, Ctx, ListQueryBuilder, Fulfillment, Permission, RequestContext, TransactionalConnection, } from '@vendure/core';

import { fulfillmentPermission } from '../constants';
import { QueryFulfillmentArgs, QueryFulfillmentsArgs } from '../generated-admin-types'; //, MutationCreateFulfillmentArgs, MutationUpdateFulfillmentArgs

@Resolver()
export class AdminResolver {
    constructor(private connection: TransactionalConnection, private listQueryBuilder: ListQueryBuilder) { }

    @Query()
    @Allow(fulfillmentPermission.Read)
    async fulfillments(@Ctx() ctx: RequestContext, @Args() args: QueryFulfillmentsArgs) {
        return this.listQueryBuilder
            .build(Fulfillment, args.options || undefined, { ctx, })
            .getManyAndCount()
            .then(([items, totalItems]) => ({ items, totalItems, }));
    }

    @Query()
    @Allow(fulfillmentPermission.Read)
    async fulfillment(@Ctx() ctx: RequestContext, @Args() args: QueryFulfillmentArgs) {
        return this.connection.getRepository(ctx, Fulfillment).findOne({ where: { id: args.id }, relations: {}, });
    }

    // @Transaction()
    // @Mutation()
    // @Allow(fulfillmentPermission.Create)
    // async createFulfillment(@Ctx() ctx: RequestContext, @Args() args: MutationCreateFulfillmentArgs){
    //     const fulfillment = new Fulfillment(args.input);
    //     return this.connection.getRepository(ctx, Fulfillment).save(fulfillment);
    // }

    // @Transaction()
    // @Mutation()
    // @Allow(fulfillmentPermission.Update)
    // async updateFulfillment( @Ctx() ctx: RequestContext, @Args() args: MutationUpdateFulfillmentArgs) {
    //     const fulfillment = await this.connection.getEntityOrThrow(ctx, Fulfillment, args.input.id, {});
    //     const updatedFulfillment = patchEntity(fulfillment, args.input);
    //     return this.connection.getRepository(ctx, Fulfillment).save(updatedFulfillment);
    // }
}
