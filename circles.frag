#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 circle(vec2 position, float inner_radius, float outer_radius, vec3 color){
    vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = 0.0;
    pct = distance(st,vec2(position))*2.0;
    vec3 col = 1.0-smoothstep(inner_radius,outer_radius,vec3(pct));
    return col*color;
}

void main(){
    vec3 color = vec3(0.005,0.776,0.985);
    vec3 circ = circle(vec2(0.5,0.5), 0.15,0.3, color);
    vec2 anim = vec2(sin((4.0*u_time*0.400))/2.0+0.5,
                     cos((4.0*u_time*0.400))/5.648+0.5);
    vec2 anim2 = vec2(sin((4.0*u_time+0.5*0.400))/3.0+0.5,
                     cos((4.0*u_time+0.5*0.400))/11.280+0.5);
    color = vec3(0.985,0.518,0.948);
	circ += circle(anim,0.064,0.264, color);
    color = vec3(0.985,0.496,0.382);
    circ += circle(anim2,0.064,0.264, color);
	gl_FragColor = vec4(circ, 1.0 );
}