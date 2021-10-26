import { ArgsType, Field, InputType } from "type-graphql";


@InputType()
export class DefinitionFilterInputType {
    @Field({nullable: true})
    id: string;
    
    @Field({nullable: true})
    nameLike: string;
}


@InputType()
export class DefinitionOrder {
    @Field()
    sortByField!: string;

    @Field({defaultValue: true})
    sortAscending: boolean;
}

@ArgsType()
export class AppDataArgs {
    @Field(() => DefinitionFilterInputType, {nullable: true})
    filter?: DefinitionFilterInputType;

    @Field(() => DefinitionOrder, {nullable: true})
    order?: DefinitionOrder;
}
