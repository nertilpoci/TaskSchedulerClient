
const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/scheduled-jobs/main.js',
        './dist/scheduled-jobs/runtime.js',
        './dist/scheduled-jobs/polyfills.js',
        './dist/scheduled-jobs/scripts.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/scheduled-jobs.js')
    console.info('Angular Elements created successfully!')

})()