import {terser} from "@wwa/rollup-plugin-terser";

/** @type {import('rollup').RollupOptions} */
// ---cut---
export default [{
    input: 'js/newvision.js', output: {
        file: '../json/js/newvision.js', format: 'es',
        plugins: [
            terser(),
        ],
    }
}

];