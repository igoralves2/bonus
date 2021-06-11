#version 400 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

// Texture sampler
uniform sampler2D ourTexture1;

void main()
{
    color = texture(ourTexture1, TexCoord);// * vec4(ourColor, 1.0);
  
    float rnovo;
    float gnovo;
    float bnovo;
    if(color.r + color.g + color.b > 1.5){
        rnovo = 1.0;
        gnovo = 1.0;
        bnovo = 1.0;
    }else{
        rnovo = 0.0;
        gnovo = 0.0;
        bnovo = 0.0;
    }
    color = vec4(rnovo, gnovo, bnovo, 1.0);
    
}