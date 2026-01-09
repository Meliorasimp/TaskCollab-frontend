declare module "*.gql" {
  import { DocumentNode } from "graphql";
  const content: DocumentNode;
  export default content;
}

declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const content: DocumentNode;
  export default content;
}

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}
