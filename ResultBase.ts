import { ClassType, Field, ObjectType } from "type-graphql";

export default function AppDataResults<TDefinition>(suffix: string, TDefinitionClass: ClassType<TDefinition>){
    @ObjectType({isAbstract: true})
    abstract class AppDataResultsClass{
        @Field(() => TDefinitionClass, {name: `${suffix}Definition`})
        definition: TDefinition;

        constructor(definition: TDefinition) {
            this.definition = definition;
        }
    }

    return AppDataResultsClass;
}