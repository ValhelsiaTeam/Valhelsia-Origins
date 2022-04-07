// priority: 10
// Valhelsia: Volatile
// Immersive Engineering Additions & Compatibility

onEvent('recipes', event => {

  // Fermenter Recipe Template
  const fermenter = (fluid, input, amount) => {
    event.custom({
        type: 'immersiveengineering:fermenter',
        fluid: {
          fluid: fluid,
          amount: amount
        },
        input: Ingredient.of(input).toJson(),
        energy: 6400
    });
  };

  // Squeezer Recipe Template
  const squeezer = (fluid, input, amount) => {
    event.custom({
        type: 'immersiveengineering:squeezer',
        fluid: {
          fluid: fluid,
          amount: amount
        },
        input: Ingredient.of(input).toJson(),
        energy: 6400
    });
  };

  // ----- Fermenter Recipes -----

  // ----- Squeezer Recipes -----
  squeezer('immersiveengineering:plantoil', '#forge:seeds/hemp', 120)
  squeezer('immersiveengineering:plantoil', '#forge:seeds/flax', 100)

});