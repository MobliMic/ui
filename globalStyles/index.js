import reset from "./normalize";
import generic from "./generic";

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
${reset}
${generic}
`;
