/** localStorage key holding the visitor's explicit choice ("light" or "dark"). */
export const THEME_KEY = "theme";

/**
 * Runs in <head> before first paint so the page never flashes the wrong theme.
 * A saved choice wins; otherwise the system setting decides. Kept as a string
 * because it is inlined into the HTML. Without JavaScript the CSS falls back
 * to the system setting on its own (see the prefers-color-scheme block).
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=null;try{t=localStorage.getItem("${THEME_KEY}")}catch(e){}if(t!=="dark"&&t!=="light")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
