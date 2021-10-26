// ResolverBase.ts
import { Args, ClassType, Ctx, Query, Resolver, Root } from "type-graphql";
import { AppDataArgs, DefinitionFilterInputType, DefinitionOrder } from "./args";
import { DefinitionService, QueryService } from "./services";

export function AppDataResolver<TResultType, TAppDataResultType>(
    suffix: string,
    appDataResultType: ClassType<TAppDataResultType>
) {
    @Resolver(() => appDataResultType, {isAbstract: true})
    abstract class AppDataBaseResolver {
        constructor(protected definitionService: DefinitionService, protected queryService: QueryService) { }

        abstract getAppData(filter?: DefinitionFilterInputType, order?: DefinitionOrder): Promise<TResultType[]>;

        @Query(() => [appDataResultType], {name: suffix})
        async get(
            @Ctx() token: string,
            @Args() {filter, order}: AppDataArgs
        ): Promise<TAppDataResultType[]> {
            const allData = await this.getAppData(filter, order);
            return allData.map(def => new appDataResultType(def));
        }
    }

    return AppDataBaseResolver;
}