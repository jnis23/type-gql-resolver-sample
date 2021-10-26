import { Service } from "typedi";


export class ObjectDefinition {
    id: string;
}

export class QueryResults {
    rows: string[];
}


@Service()
export class DefinitionService{
    getDefinitions(){
        return [];
    }
}

@Service()
export class QueryService {
    execQuery(definition: ObjectDefinition): QueryResults {
        return {
            rows: [definition.id, "success"]
        }
    }
}
