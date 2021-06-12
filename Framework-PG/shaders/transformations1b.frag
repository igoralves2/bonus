#version 400 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

// Texture sampler
uniform sampler2D ourTexture1;

void main()
{
    color = texture(ourTexture1, TexCoord);// * vec4(ourColor, 1.0);
     float media = (0.33 * color.r + 0.66 * color.g + 0.9 * color.b) / 3;
    color = vec4(media, media, media, 1.0);
}