#version 400 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

// Texture sampler
uniform sampler2D ourTexture1;

//new Color
uniform vec4 newColor = vec4(0.9, 0.6, 0.3, 0.5);

void main()
{
    color = texture(ourTexture1, TexCoord) * newColor;
}