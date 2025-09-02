import { lazy } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, trickleSpeed: 200 });

export function lazyWithProgress(factory) {
  return lazy(() => {
    NProgress.start();
    return factory().finally(() => NProgress.done());
  });
}
