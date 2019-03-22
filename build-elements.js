
const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/taskscheduler/main.js',
        './dist/taskscheduler/runtime.js',
        './dist/taskscheduler/polyfills.js',
        './dist/taskscheduler/scripts.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/scheduled-jobs.js')
    console.info('Angular Elements created successfully!')

})()