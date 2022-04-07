// priority: 100
// Valhelsia: Origins
// Removal of unused, duplicate, or otherwise undesired recipes.

onEvent('recipes', function (event) {

  // Remove recipes by recipe ID.
  [
    // None Yet.
  ].forEach(function (remove) {
    event.remove({id: remove})
  });

  // Remove recipes by input.
  [
    // None Yet.
  ].forEach(function (remove) {
    event.remove({output: remove})
  });

  // Remove recipes by output.
  [
    // None Yet.
  ].forEach(function (remove) {
    event.remove({output: remove})
  });

});
