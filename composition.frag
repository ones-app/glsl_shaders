
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 rectangle(vec2 bl, vec2 tr, vec3 color){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
     // bottom-left
    bl = step(vec2(bl),st);
    float pct = bl.x * bl.y;

    // top-right
    tr = step(vec2(1.0-tr),1.0-st);
    pct *= tr.x * tr.y;
    vec3 result = vec3(color.r*pct,
                       color.g*pct,
                       color.b*pct);
    return result;
}

void main(){
   	vec3 color = vec3(0.6078, 0.1333, 0.1098);
    
	vec2 bl = vec2(0.040,0.640);
   	vec2 tr = vec2(0.210,0.970);
    vec3 rect = vec3(rectangle(bl, tr, color));
    
    bl = vec2(0.220,0.640);
   	tr = vec2(0.390,0.970);
    rect += vec3(rectangle(bl, tr, color));
    
    color = vec3(0.885,0.853,0.517);
    bl = vec2(0.410,0.640);
   	tr = vec2(0.800,0.970);
    rect += vec3(rectangle(bl, tr, color));
    
    color = vec3(0.885,0.685,0.084);
    bl = vec2(0.820,0.640);
   	tr = vec2(0.970,0.970);
    rect += vec3(rectangle(bl, tr, color));
    
    color = vec3(0.885,0.853,0.517);
    bl = vec2(0.030,0.140);
   	tr = vec2(0.970,0.620);
    rect += vec3(rectangle(bl, tr, color));
    
    color = vec3(0.885,0.853,0.517);
    bl = vec2(0.030,0.030);
   	tr = vec2(0.850,0.110);
    rect += vec3(rectangle(bl, tr, color));
    
    color = vec3(0.245,0.357,0.885);
    bl = vec2(0.870,0.030);
   	tr = vec2(0.960,0.110);
    rect += vec3(rectangle(bl, tr, color));
    
    gl_FragColor += vec4(rect,1.0);
}