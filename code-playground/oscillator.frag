#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 colorA = vec3(0.912,0.078,0.026);
vec3 colorB = vec3(0.007,0.079,1.000);

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 sm = u_mouse.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    color = mix(colorA, colorB, sin(st.x*50.0*(sm.x+0.2)+u_time*3.0+sm.y*7.0+sin(st.y*30.0*sm.y+sm.y*30.0))+0.5)/1.5;

    gl_FragColor = vec4(color,1.0);
}
