# recent list

> https://thebookofshaders.com/

> [disentanglement](https://ai.googleblog.com/2019/04/evaluating-unsupervised-learning-of.html)

> [octave convolution](https://export.arxiv.org/pdf/1904.05049)

  separate high and low freq convolution, compress low frequency to reduce memory and flop, update and exchange between high and low, during training

> [coord convolution](https://arxiv.org/pdf/1807.03247.pdf)

  add a coordinate layer to help convolution locate


## tools

sketchfeb

> [disentanglement lib](https://github.com/google-research/disentanglement_lib)


## datasets

> [disentanglement lib](https://github.com/google-research/disentanglement_lib)

> [3d shapes](https://github.com/deepmind/3d-shapes)

## tutorials

[shader intro](https://github.com/lettier/3d-game-shaders-for-beginners)
  
## geometric mesh

- https://github.com/danielepanozzo/gp

- [Bounded Biharmonic Weights for Real-Time Deformation](http://igl.ethz.ch/projects/bbw/bounded-biharmonic-weights-siggraph-2011-slides-compressed-jacobson-et-al.pdf)

simultaneous localization and mapping (SLAM)

> reconstruction fusion

- DynamicFusion [2], 
high occlusion from the single view
real-time performance
geometry/skeleton prior knowledge

- Volume Deform [3], 

- Double Fusion4D
reconstruct both the inner body and outer surface
adding body template

- Albedo based fusion

- killing fusion / sobelev fusion
topology changes and fast inter-frame motions

- articulated fusion
  - segmentation constrains all nodes labeled to the same segment having transformation as close as possible - reduce solution space
  - self-adapted segmentation
  - registration, segmentation, and fusion
  - clustering of a set of deformed nodes based on their motion trajectories by merging and swapping

https://github.com/andyzeng/tsdf-fusion-pythons

## project

- atamid, rig animation using Tangible and Modular Input Device

- mesh optimizer

## GL

**vbo**
```
GLuint vbo;
glGenBuffers(1, &vbo); // Generate 1 buffer

glBindBuffer(GL_ARRAY_BUFFER, vbo);
glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
```

**shader**
```
const char* vertexSource = R"glsl(
    #version 150 core

    in vec2 position;

    void main()
    {
        gl_Position = vec4(position, 0.0, 1.0);
    }
)glsl";

GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);
glShaderSource(vertexShader, 1, &vertexSource, NULL);
glCompileShader(vertexShader);

// check shader
GLint status;
glGetShaderiv(vertexShader, GL_COMPILE_STATUS, &status); // return GL_TRUE
// compile log
char buffer[512];
glGetShaderInfoLog(vertexShader, 512, NULL, buffer);

GLuint shaderProgram = glCreateProgram();
glAttachShader(shaderProgram, vertexShader);
glAttachShader(shaderProgram, fragmentShader);

glDrawBuffer
glDeleteShader
glDetachShader
```

```
GLint posAttrib = glGetAttribLocation(shaderProgram, "position");
glVertexAttribPointer(posAttrib, 2, GL_FLOAT, GL_FALSE, 0, 0);
glEnableVertexAttribArray(posAttrib);
```

**vao**

```
GLuint vao;
glGenVertexArrays(1, &vao);
glBindVertexArray(vao);

glDrawArrays(GL_TRIANGLES, 0, 3);
```

```
GLint uniColor = glGetUniformLocation(shaderProgram, "triangleColor");
glUniform3f(uniColor, 1.0f, 0.0f, 0.0f);
auto t_start = std::chrono::high_resolution_clock::now();

...

auto t_now = std::chrono::high_resolution_clock::now();
float time = std::chrono::duration_cast<std::chrono::duration<float>>(t_now - t_start).count();

glUniform3f(uniColor, (sin(time * 4.0f) + 1.0f) / 2.0f, 0.0f, 0.0f);
```

```
GLint posAttrib = glGetAttribLocation(shaderProgram, "position");
glEnableVertexAttribArray(posAttrib);
glVertexAttribPointer(posAttrib, 2, GL_FLOAT, GL_FALSE,
                       5*sizeof(float), 0);

GLint colAttrib = glGetAttribLocation(shaderProgram, "color");
glEnableVertexAttribArray(colAttrib);
glVertexAttribPointer(colAttrib, 3, GL_FLOAT, GL_FALSE,
                       5*sizeof(float), (void*)(2*sizeof(float)));
```

**ebo**
```
GLuint elements[] = {
    0, 1, 2
};

GLuint ebo;
glGenBuffers(1, &ebo);

...

glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
glBufferData(GL_ELEMENT_ARRAY_BUFFER,
    sizeof(elements), elements, GL_STATIC_DRAW);

glDrawElements(GL_TRIANGLES, 3, GL_UNSIGNED_INT, 0);
```

**framebuffer**
```
GLuint frameBuffer;
glGenFramebuffers(1, &frameBuffer);

glCheckFramebufferStatus
GL_FRAMEBUFFER_COMPLETE

glBindFramebuffer(GL_FRAMEBUFFER, frameBuffer);

glDeleteFramebuffers(1, &frameBuffer);
```

**texture**
```
GLuint texColorBuffer;
glGenTextures(1, &texColorBuffer);
glBindTexture(GL_TEXTURE_2D, texColorBuffer);

glTexImage2D(
    GL_TEXTURE_2D, 0, GL_RGB, 800, 600, 0, GL_RGB, GL_UNSIGNED_BYTE, NULL
);

glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

glFramebufferTexture2D(
    GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D, texColorBuffer, 0
);
```


GL_STATIC_DRAW: The vertex data will be uploaded once and drawn many times (e.g. the world).
GL_DYNAMIC_DRAW: The vertex data will be created once, changed from time to time, but drawn many times more than that.
GL_STREAM_DRAW: The vertex data will be uploaded once and drawn once.


> https://glm.g-truc.net/0.9.9/index.html

> https://en.wikipedia.org/wiki/Advanced_Vector_Extensions

> https://www.cgal.org/
https://www.cgal.org/project.html#