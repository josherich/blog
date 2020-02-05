importScripts("https://unpkg.com/comlink@alpha/dist/umd/comlink.js");
// importScripts("../../../dist/umd/comlink.js");

const COLUMNS = 1000
const ROWS = 1000

const MAX_TEMP_ERROR = 0.01

let temperature = new Array(ROWS+2)
let temperature_last = new Array(ROWS+2)

let track_progress = (iter) => {
  let i;

  console.log(`---------- Iteration number: %d ------------\n`, iter)
  for(i = ROWS-5; i <= ROWS; i++) {
      console.log(`[${i},${i}]: ${temperature[i][i]}`)
  }
}

let initialize = () => {
  for (let i = 0; i <= ROWS+1; i++) {
    temperature[i] = []
    temperature_last[i] = []
    for (let j = 0; j <= COLUMNS; j++) {
      temperature[i].push(0.0)
      temperature_last[i].push(0.0)
    }
  }

  for (let i = 0; i <= ROWS+1; i++) {
    temperature_last[i][0] = 0.0
    temperature_last[i][COLUMNS+1] = (100.0/ROWS)*i;
  }

  for (let j = 0; j <= COLUMNS+1; j++) {
    temperature_last[0][j] = 0.0
    temperature_last[ROWS+1][j] = (100.0/COLUMNS)*j;
  }
}


let run_serial = (max_iter) => {
  console.log(`Maximum iterations ${max_iter} \n`)
  let dt = 100
  let iteration = 1

  let start = Date.now()

  let i = 0
  let j = 0
  while ( dt > MAX_TEMP_ERROR && iteration <= max_iter) {
    
    // #pragma omp parallel for private(i,j)    
    for (i = 1; i <= ROWS; i++) {
      for (j = 1; j <= COLUMNS; j++) {
        temperature[i][j] = 0.25 * (temperature_last[i+1][j] + temperature_last[i-1][j] +
                                    temperature_last[i][j+1] + temperature_last[i][j-1]);
      }
    }

    dt = 0.0

    // #pragma omp parallel for reduction(max:dt) private(i,j)    
    for (i = 1; i <= ROWS; i++) {
      for (j = 1; j <= COLUMNS; j++) {
        dt = Math.max(Math.abs(temperature[i][j] - temperature_last[i][j]), dt)
        temperature_last[i][j] = temperature[i][j]
      }
    }

    if (iteration % 100 == 0) {
      track_progress(iteration)
    }

    iteration++
  }

  let total_time = Date.now() - start
  console.log(`Max error at iteration ${iteration-1} was ${dt}`)
  console.log(`Total time was ${total_time/1000} seconds.`)
}

const obj = {
  counter: 0,
  temperature: [],
  inc() {
    this.counter++;
  },
  init() {
    initialize()
  },
  run() {
    run_serial(100);
    this.temperature = temperature;
  }
};

Comlink.expose(obj);