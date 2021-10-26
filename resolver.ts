import { Field, ObjectType, Resolver } from "type-graphql";
import { Service } from "typedi";
import { DefinitionFilterInputType, DefinitionOrder } from "./args";
import { AppDataResolver } from "./ResolverBase";
import AppDataResults from "./ResultBase";

@ObjectType()
class ViewDefinition {
    @Field()
    name: string;

    @Field()
    displayName: string;
}


@ObjectType()
class ViewResults extends AppDataResults("view", ViewDefinition) { }
const ViewBaseResolver = AppDataResolver<ViewDefinition, ViewResults>("views", ViewResults);

@Service()
@Resolver( () => ViewResults)
export class ViewResultsResolver extends ViewBaseResolver {
    getAppData(filter?: DefinitionFilterInputType, order?: DefinitionOrder): Promise<ViewDefinition[]> {
        return Promise.resolve([{
            name: "sample",
            displayName: "Sample"
        }])
    }    
}
