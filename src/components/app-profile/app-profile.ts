import { Component, Prop, State } from "@stencil/core";
import { MatchResults } from "@stencil/router";
import { $ } from "./app-profile-styles";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css",
  shadow: true
})
export class AppProfile {
  @Prop() match: MatchResults;
  @State() count: number = 1;
  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return "";
  }
  handleClick(event?: UIEvent) {
    console.log("event", event.target);
    this.count = this.count + 1;
  }
  render() {
    if (this.match && this.match.params.name) {
      return $.div.appProfile.h(
        $.p.h(`Hello! My name is ${this.normalize(this.match.params.name)}.
        My name was passed in through a route param!`),
        $.button.h(
          { onclick: (event: UIEvent) => this.handleClick(event) },
          `Increment ${this.count}`
        )
      );
    }
  }
}
