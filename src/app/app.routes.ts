import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home.component";

export const allAppComponents = [HomeComponent];

export const routes: Routes = [
	{path: "about", commponent:AboutComponent},
	{path: "", component: HomeComponent},
	{path: "**", redirectTo: ""}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);