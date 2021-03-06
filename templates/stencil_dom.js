"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});

function default_1(classProperties) {
  return `
    import * as Stencil from "@stencil/core/dist/renderer/vdom";
    import {
      PropsType,
      ChildType,
      VNode
    } from "@stencil/core/dist/declarations/vdom";


    export default class BaseStyles {
        public chain: string[];
        public conditions: boolean[] = [];
        public classProps: any = {};
        private writeConditionIndex: number = 0;
        private readConditionIndex: number = 0;
        private classObjectMode: boolean = false;

        constructor(selector: string) {
            this.chain = new Array<string>();
            if (selector.length > 0) {
                this.chain.push(selector);
            }
            return this;
        }

        public when = (condition: boolean): BaseStyles => {
            this.classObjectMode = true;
            this.conditions[this.writeConditionIndex] = condition;
            return this;
        }

        public andWhen = (condition: boolean): BaseStyles => {
            this.classObjectMode = true;
            this.writeConditionIndex++;
            this.readConditionIndex++;
            return this.when(condition);

        }

        public otherwise = (): BaseStyles => {
            this.classObjectMode = true;
            return this.andWhen( !this.conditions[this.readConditionIndex]);
        }

        public h = (properties: PropsType = {}, ...children: ChildType[]): VNode => {
          if (this.classObjectMode) {
            throw Error(
              "You can't build a vnode when you are using this for building a classes object"
            );
          }
          if (typeof properties === "object" && !properties.vtag) {
            return Stencil.h(
              this.chain[0], { ...properties,
                class: this.toString()
              },
              ...children
            );
          }
          return Stencil.h(
            this.chain[0], {
              class: this.toString()
            },
            ...[properties as ChildType, ...children]
          );
        };

        public toObj = () => {
            if (!this.classObjectMode) {
                // tslint:disable-next-line:max-line-length
                throw Error("You need to call at least one conditional method in order to use this as a classes object generator");
            }
            return this.classProps;
        }

        get div(): BaseStyles { return new BaseStyles("div"); }
        get a(): BaseStyles { return new BaseStyles("a"); }
        get p(): BaseStyles { return new BaseStyles("p"); }
        get header(): BaseStyles { return new BaseStyles("header"); }
        get main(): BaseStyles { return new BaseStyles("main"); }
        get section(): BaseStyles { return new BaseStyles("section"); }
        get nav(): BaseStyles { return new BaseStyles("nav"); }
        get span(): BaseStyles { return new BaseStyles("span"); }
        get button(): BaseStyles { return new BaseStyles("button"); }
        get input(): BaseStyles { return new BaseStyles("input"); }
        get label(): BaseStyles { return new BaseStyles("label"); }
        get select(): BaseStyles { return new BaseStyles("select"); }
        get textarea(): BaseStyles { return new BaseStyles("textarea"); }

        public toString = (): string => {
            if (this.classObjectMode) {
                throw Error("You can't build a selector string when you are calling conditional methods");
            }
            if (this.chain.length === 1) {
                return this.chain[0] || "div";
            }
            return this.chain.join(" ");
        }

        public $ = (className: string): BaseStyles => {
            return this.add(className);
        }

        public add = (className: string): BaseStyles => {
            if (this.classObjectMode) {
                this.classProps[className] = this.conditions[this.readConditionIndex];
            } else if (className.length > 0) {
                this.chain.push(className);
            }
            return this;
        }

        ${classProperties.join("\n")}

}

export const $$ = (selector?: string): BaseStyles =>  {
    return new BaseStyles("" + selector || "");
};

export const $ = $$();

`;
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFxdWV0dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVtcGxhdGVzL21hcXVldHRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUJBQXdCLGVBQXlCO0lBQy9DLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBdUZDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7O0NBVW5DLENBQUM7QUFDRixDQUFDO0FBbkdELDRCQW1HQyJ9
