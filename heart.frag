#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;




void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 pos = vec2(0.5,0.6);
    float range = distance(pos.x, float(st))*1.112;
    float shift = smoothstep(range,range+1.948,pos.x);
    float d = distance(vec2(pos.x, pos.y-shift*0.896),st);
    float rad = 0.4;
    vec3 color = vec3( 1.0- smoothstep(rad, rad, d));
    
    gl_FragColor = vec4(color,1.0);
}