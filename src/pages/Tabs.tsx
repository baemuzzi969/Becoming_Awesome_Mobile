import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import { heart, albums, person } from "ionicons/icons";

// Tab pages
import Welcome from "./myprogram/Welcome";
import Description from "./myprogram/Description";
import Background from "./myprogram/Background";
import Activation from "./myprogram/Activation";
import Celebrate from "./myprogram/Celebrate";
import Features from "./myprogram/Features";
import Tutorial from "./myprogram/Tutorial";
import Introduction from "./myprogram/Introduction";
import Ascension from "./myprogram/Ascension";
import Assessment from "./myprogram/Assessment";
import StartAssessment from "./myprogram/StartAssessment";
import Home from "./mystuff/Home";
import Lessons from "./mystuff/Lessons";

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tabs/program/welcome" component={Welcome} />
        <Route exact path="/tabs/program/description" component={Description} />
        <Route exact path="/tabs/program/background" component={Background} />
        <Route exact path="/tabs/program/activation" component={Activation} />
        <Route exact path="/tabs/program/celebrate" component={Celebrate} />
        <Route exact path="/tabs/program/features" component={Features} />
        <Route exact path="/tabs/program/tutorial" component={Tutorial} />
        <Route exact path="/tabs/program/ascension" component={Ascension} />
        <Route exact path="/tabs/program/assessment" component={Assessment} />
        <Route
          exact
          path="/tabs/program/start-assessment"
          component={StartAssessment}
        />
        <Route
          exact
          path="/tabs/program/start-assessment"
          component={StartAssessment}
        />
        <Route
          exact
          path="/tabs/program/introduction"
          component={Introduction}
        />
        <Route exact path="/tabs/mystuff/home" component={Home} />
        <Route exact path="/tabs/mystuff/lessons" component={Lessons} />
        <Route exact path="/tabs/program">
          <Redirect to="/tabs/program/welcome" />
        </Route>
        <Route exact path="/tabs/mystuff">
          <Redirect to="/tabs/mystuff/home" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom" className="rounded-t-xl">
        <IonTabButton tab="program" href="/tabs/program">
          <IonIcon icon={heart} />
          <IonLabel className="text-xs font-medium font-roboto">
            MyProgram
          </IonLabel>
        </IonTabButton>

        <IonTabButton tab="mystuff" href="/tabs/mystuff">
          <IonIcon icon={albums} />
          <IonLabel className="text-xs font-medium font-roboto">
            MyStuff
          </IonLabel>
        </IonTabButton>

        <IonTabButton tab="profile" href="/tabs/profile">
          <IonIcon icon={person} />
          <IonLabel className="text-xs font-medium font-roboto">
            Profile
          </IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
