function jscallback_window_set_fullscreen_setup(el_selector,_magic, _set_fullscreen) {
    const el = document.querySelector(el_selector);
    const fn_str = window.gml_Script_gmcallback_html5_set_fullscreen.toString();
    const mt = /69420\s*,\s*([$\w]+)/g.exec(fn_str);
    //const mt = new RegExp(`${magic}\s*([$\w]+)`,'g').exec(fn_str);
    if (mt) {
        // window_set_fullscreen
        window[mt[1]] = function(fullscreen) {
            if (fullscreen==1) {
                el.requestFullscreen().then(p=>{
                    console.log('Element made fullscreen')
                }).catch(e=>{
                    console.log('Could not make element fullscreen');
                });
            } else {
                document.exitFullscreen().then(p=>{
                    console.log('Left fullscreen')
                }).catch(e=>{  
                    console.log('Could not leave fullscreen');
                });
            }
        }
    }
}
function jscallback_window_get_fullscreen_setup(_magic,_set_fullscreen) {
    const fn_str = window.gml_Script_gmcallback_html5_get_fullscreen.toString();
    const mt = /69420\s*,\s*([$\w]+)/g.exec(fn_str);
    //const mt = new RegExp(`${magic}\s*([$\w]+)`,'g').exec(fn_str);
    if (mt) {
        // window_set_fullscreen
        window[mt[1]] = function() {
            if (document.fullscreenElement != null) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}