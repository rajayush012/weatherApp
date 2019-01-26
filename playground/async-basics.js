console.log('Starting app.');
setTimeout(() => {
    console.log('Inside Timeout');
}, 2000);

setTimeout(() => {
    console.log('second timeout')
},1000);

console.log('Stopping app.'); 