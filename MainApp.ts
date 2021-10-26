import "reflect-metadata";
import express, { Application, NextFunction, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "type-graphql";
import * as path from 'path';
import { ViewResultsResolver } from "resolver";

export class MainApp {
    private app: Application = express();

    public async configureApplication(): Promise<Application> {
        this.configureExpress();
        return this.app;
    }

    private configureExpress() {
        this.app.use( `/v1/graphql`, async function ( req, res ) {
            const schema = await buildSchema({
                resolvers: [ViewResultsResolver],
                emitSchemaFile: path.resolve(__dirname, "schema.gql")
            })
            return graphqlHTTP( {
                schema: schema
            } )( req, res );
        } );
    }
}