import { Component } from "@stencil/core";
import { $ } from "./app-home-styles";

//if you want to use the styles from tachyons then turn off shadow dom so it can inherit styles from the parent
@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true
})
export class AppHome {
  render() {
    return $.div.appHome.h(
      $.p.intro.h(`Welcome to the Stencil App Starter.
           You can use this starter to build entire apps all with
           web components using Stencil!
           Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
         `),
      $.a.btn.h({ href: "/profile/stencil" }, "Profile Page")
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
