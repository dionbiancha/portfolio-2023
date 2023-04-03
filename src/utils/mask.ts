import React from "react";

export function renderHTML(escapedHTML: string) {
  return React.createElement("div", {
    dangerouslySetInnerHTML: { ___html: escapedHTML },
  });
}
