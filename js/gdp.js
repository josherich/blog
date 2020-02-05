var IKEnvironment = function () {
  this.environment = new Environment();
  this.updating = false;
  this.font = undefined;

  this.boxGeometry = new THREE.BoxBufferGeometry(100, 100, 100);
  this.white = new THREE.MeshLambertMaterial({ color: 0x888888 });
  this.textGeometry = undefined;

  this.initVisualizer = function(countries, year) {
    let i = -100;
    countries.map((row) => {
      if (row["Year"] === year) {
        this.addCube([0, 0, i*10], row["Value"], row["Country Name"]);
        i++;
      }
    });
  };

  this.addCube = function(position, height, name) {
    let cube = new THREE.Group();
    let vol = Math.sqrt(height)/1000000;
    console.log(position, " : ", height, " : ", vol)
    this.environment.scene.add(cube);
    cube.position.set(position[0], position[1], position[2]);
    let box = new THREE.Mesh(this.boxGeometry, this.white);
    cube.add(box);
    box.scale.set(0.05, vol, 0.05);
    // box.scale.set(0.05, 0.1, 0.15);
    box.position.set(0, vol*50, 0);
    box.castShadow = true;
    let textGeometry = new THREE.TextGeometry(name, {
      font: this.font,
      size: 10,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelOffset: 0,
      bevelSegments: 5
    });
    // todo performance
    // textGeometry = new THREE.BufferGeometry().fromGeometry(textGeometry);
    let text = new THREE.Mesh(textGeometry, this.white)
    cube.add(text);
    text.position.set(0, vol*50 + 5, 0);
  }

  this.animate = function animatethis() {
    requestAnimationFrame(() => this.animate());

    //Set up a lazy render loop where it only renders if it's been interacted with in the last second
    if (this.environment.viewDirty) {
      this.environment.lastTimeRendered = this.environment.time.getElapsedTime();
      this.environment.viewDirty = false;
    }
    if (this.environment.time.getElapsedTime() - this.environment.lastTimeRendered < 2.0) {
      // Keep the target from going beneath the floor...
      if (this.limits == "enabled") {
        this.environment.draggableObjects[0].position.y = Math.max(0, this.environment.draggableObjects[0].position.y);
      }

      // this.solveIK(this.environment.draggableObjects[0].position);
      this.environment.renderer.render(this.environment.scene, this.environment.camera);
    }
  };

  this.loadFont = function() {
    var loader = new THREE.FontLoader();
    return new Promise((resolve, reject) => {
      loader.load('../downloads/helvetiker_regular.typeface.json', (response) => {
        this.font = response;
        this.textGeometry = new THREE.TextGeometry("name", {
          font: response,
          size: 10,
          height: 5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 10,
          bevelSize: 8,
          bevelOffset: 0,
          bevelSegments: 5
        });
        resolve(response);
      });
    })
  }

  this.loadFont().then((font) => {
    var uri = "../downloads/gdp_json.json";
    return fetch(uri).then((data) => {
      return data.json();
    });
  }).then((data) => {
    this.initVisualizer(data, 2015);
    this.animate();
    this.environment.renderer.render(this.environment.scene, this.environment.camera);
  })
}

new IKEnvironment();