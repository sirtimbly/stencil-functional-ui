import { Component, Prop } from "@stencil/core";
import { $$ as t$ } from "../../tachyons-styles";
import { $ } from "./app-root-styles";
import { h } from "@stencil/core/dist/renderer/vdom";

@Component({
  tag: "app-root",
  styleUrls: ["app-root.css", "../../tachyons.css"],
  shadow: true
})
export class AppRoot {
  @Prop({
    reflectToAttr: true
  })
  message: string = "hello world";
  render() {
    return $.div.h(
      $.header.headerBar.h(
        t$("h1").f2.tc.pa2.white_50.h("Stencil App Starter")
      ),
      router(),
      $.div.message.h("Root message attribue: " + this.message)
    );
  }
}

function router() {
  return h(
    "main",
    {},
    h(
      "stencil-router",
      {},
      h(
        "stencil-route-switch",
        {},
        h("stencil-route", {
          url: "/",
          component: "app-home",
          exact: true
        }),
        h("stencil-route", {
          url: "/profile/:name",
          component: "app-profile"
        })
      )
    )
  );
}
