'use strict';

console.log('--- loading: reset lastResult');

function resetLastResultHandler() {
  debugger;
  console.log('\n--- action: reset lastResult ---');
  

  console.log('lastResult (after):', typeof lastResult, '\n', lastResult);

  displayLastResultHandler();

}
