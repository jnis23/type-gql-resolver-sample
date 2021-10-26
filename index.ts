import "module-alias/register";
import { MainApp } from "./MainApp";

new MainApp().configureApplication()
    .then( app => {
        app.listen( 3000 )
    } );
