import React from 'react';
import { useExternalScript } from "../../../../hooks/useExternalScript.js";

const DOCTORALIA_SCRIPT = "//platform.docplanner.com/js/widget.js?ts=";

export function Doctoralia({ url, doctor, nombre }) {
    const externalScript = `${DOCTORALIA_SCRIPT}${new Date().getTime()}`
    const state = useExternalScript(externalScript);

    return (
        <div>
            {state === "loading" && <p>Cargando...</p>}
            {state === "ready" &&  <a id="zl-url" className="zl-url" href={url}
                                      rel="nofollow" data-zlw-doctor={doctor} data-zlw-type="big_with_calendar" data-zlw-opinion="false"
                                      data-zlw-hide-branding="true" data-zlw-saas-only="false">{nombre} - Doctoralia.es</a>}
        </div>
    );

}

export default Doctoralia;