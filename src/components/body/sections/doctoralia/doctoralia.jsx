import React, { useEffect, useRef } from 'react';
//import './doctoralia.css';

export function Doctoralia() {
    const linkRef = useRef(null);

    useEffect(() => {
        const loadScript = () => {
            const scriptId = 'zl-widget-s';
            if (!document.getElementById(scriptId)) {
                const script = document.createElement('script');
                script.id = scriptId;
                script.src = "//platform.docplanner.com/js/widget.js";
                document.body.appendChild(script);
            }
        };


        loadScript();

        if (linkRef.current) {
            linkRef.current.setAttribute('data-zlw-doctor', 'maria-jurado-diaz');
            linkRef.current.setAttribute('data-zlw-type', 'big_with_calendar');
            linkRef.current.setAttribute('data-zlw-opinion', 'false');
            linkRef.current.setAttribute('data-zlw-hide-branding', 'true');
            linkRef.current.setAttribute('data-zlw-saas-only', 'false');
        }
    }, []);

    return (
        <>
            <a ref={linkRef} id="zl-url" className="zl-url" href="https://www.doctoralia.es/maria-jurado-diaz/fisioterapeuta/granada" rel="nofollow">
                María Jurado Díaz - Doctoralia.es
            </a>
        </>
    );
}

export default Doctoralia;

/*

<a id="zl-url" class="zl-url" href="https://www.doctoralia.es/maria-jurado-diaz/fisioterapeuta/granada" rel="nofollow" data-zlw-doctor="maria-jurado-diaz" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true" data-zlw-saas-only="false">María Jurado Díaz - Doctoralia.es</a>
<script>!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");</script>

*/