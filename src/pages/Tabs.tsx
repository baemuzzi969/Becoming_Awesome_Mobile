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
import Welcome from "./onboarding/Welcome";
import Description from "./onboarding/Description";
import Background from "./onboarding/Background";
import Activation from "./onboarding/Activation";

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tabs/program/welcome" component={Welcome} />
        <Route exact path="/tabs/program/description" component={Description} />
        <Route exact path="/tabs/program/background" component={Background} />
        <Route exact path="/tabs/program/activation" component={Activation} />
        <Route exact path="/tabs">
          <Redirect to="/tabs/program/welcome" />
        </Route>
        <Route exact path="/tabs/program">
          <Redirect to="/tabs/program/welcome" />
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
