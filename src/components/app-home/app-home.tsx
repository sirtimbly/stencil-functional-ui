import { Component } from "@stencil/core";
import { $, $$ } from "./app-home-styles";
import { $ as t } from "../../tachyons-styles";

//if you want to use the styles from tachyons then turn off shadow dom so it can inherit styles from the parent
@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: false
})
export class AppHome {
  render() {
    return $.div.appHome.h(
      t.div.bgDarkBlue.pa2.white.h("HOME"),
      $$("p").h(`Welcome to the Stencil App Starter.
           You can use this starter to build entire apps all with
           web components using Stencil!
           Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
         `),
      $.a.btn.h({ href: "/profile/stencil" }, "Profile Button")
    );
  }
  // return (
  //   <div class='app-home'>
  //     <p>
  //       Welcome to the Stencil App Starter.
  //       You can use this starter to build entire apps all with
  //       web components using Stencil!
  //       Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
  //     </p>

  //     <stencil-route-link url='/profile/stencil'>
  //       <button>
  //         Profile page
  //       </button>
  //     </stencil-route-link>
  //   </div>
  // );
}
