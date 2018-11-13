import { Component, Prop } from "@stencil/core";
import { MatchResults } from "@stencil/router";
import { $ } from "./app-profile-styles";
import { $ as t } from "../../tachyons-styles";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css",
  shadow: false
})
export class AppProfile {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return "";
  }

  render() {
    if (this.match && this.match.params.name) {
      return $.div.appProfile.h(
        t.p.tc.bgLightBlue.pa3.h(`Hello! My name is ${this.normalize(
          this.match.params.name
        )}.
        My name was passed in through a route param!`),
        t.a.h({ href: "/." }, "Back Home")
      );
    }
  }
}
