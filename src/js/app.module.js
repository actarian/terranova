import { CoreModule, Module } from 'rxcomp';
import AppComponent from './app.component';
import AppearStaggerDirective from './appear/appear-stagger.directive';
import FlagPipe from './flag/flag.pipe';
import FooterMenuComponent from './footer/footer-menu.component';
import SliderGalleryComponent from './slider/slider-gallery.component';
import SliderHeroComponent from './slider/slider-hero.component';
import SliderMainComponent from './slider/slider-main.component';
import SliderVerticalComponent from './slider/slider-vertical.component';
import SliderComponent from './slider/slider.component';
import ViewClientsComponent from './view/view-clients.component';
import ViewGroupComponent from './view/view-group.component';
import ViewSuiteComponent from './view/view-suite.component';
import ViewTabsComponent from './view/view-tabs.component';
import ViewTextCenterComponent from './view/view-text-center.component';
import ViewTextGraphComponent from './view/view-text-graph.component';
import ViewTextLeftComponent from './view/view-text-left.component';
import ViewTextMapComponent from './view/view-text-map.component';
import ViewTextRightComponent from './view/view-text-right.component';
import ViewTextTwoColsComponent from './view/view-text-two-cols.component';
import ViewWelcomeComponent from './view/view-welcome.component';

export class AppModule extends Module { }

AppModule.meta = {
	imports: [
		CoreModule,
	],
	declarations: [
		AppearStaggerDirective,
		FlagPipe,
		FooterMenuComponent,
		SliderComponent,
		SliderMainComponent,
		SliderVerticalComponent,
		SliderGalleryComponent,
		SliderHeroComponent,
		ViewClientsComponent,
		ViewGroupComponent,
		ViewSuiteComponent,
		ViewTabsComponent,
		ViewTextCenterComponent,
		ViewTextGraphComponent,
		ViewTextLeftComponent,
		ViewTextMapComponent,
		ViewTextRightComponent,
		ViewTextTwoColsComponent,
		ViewWelcomeComponent,
	],
	bootstrap: AppComponent,
};
