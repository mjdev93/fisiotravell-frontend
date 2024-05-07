import React from 'react';
import { useExternalScript } from "../../../../hooks/useExternalScript.js";

const DOCTORALIA_SCRIPT = "//platform.docplanner.com/js/widget.js?ts=";

export function Doctoralia() {
    const externalScript = `${DOCTORALIA_SCRIPT}${new Date().getTime()}`
    const state = useExternalScript(externalScript);

    return (
        <div>
            {state === "loading" && <p>Cargando...</p>}
            {state === "ready" &&  <a id="zl-url" className="zl-url" href="https://www.doctoralia.es/maria-jurado-diaz/fisioterapeuta/granada"
                                      rel="nofollow" data-zlw-doctor="maria-jurado-diaz" data-zlw-type="big_with_calendar" data-zlw-opinion="false"
                                      data-zlw-hide-branding="true" data-zlw-saas-only="false">María Jurado Díaz - Doctoralia.es</a>}
        </div>
    );

}

export default Doctoralia;