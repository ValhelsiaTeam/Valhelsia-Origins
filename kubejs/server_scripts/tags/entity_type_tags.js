// priority: 110
// Valhelsia: Origins
// Entity Type Tags

onEvent('tags.entity_type', event => {

  // Add Halloween Event Candy to Spoopy Mobs
  event.add('valhelsia_tweaks:drops_candy', [
    'minecraft:zombie',
    'minecraft:husk',
    'minecraft:skeleton',
    'minecraft:stray',
    'minecraft:witch',
    'minecraft:spider',
    'minecraft:phantom',
    'minecraft:cave_spider',
    'quark:wraith',
    'quark:forgotten',
  ]);

});