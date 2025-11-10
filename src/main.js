import polyfill from "@oddbird/css-anchor-positioning/fn";
import "./popover.css";

if (!("anchorName" in document.documentElement.style)) {
  await polyfill();
}
