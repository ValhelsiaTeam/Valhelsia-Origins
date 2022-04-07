// priority: 100
// Valhelsia: Origins
// Recipe Input & Output Replacements

onEvent('recipes', function (event) {

  const replaceInputID = (id, from, to) => {
    event.replaceInput({id: id}, from, to, true)
  };

  const replaceInput = (from, to) => {
    event.replaceInput({}, from, to, true)
  };

  // Cobblestone variants in place of Minecraft Cobblestone in some recipes:
  [ // Recipe ID:
    'minecraft:dispenser',
    'minecraft:dropper',
    'minecraft:observer',
    'minecraft:piston',
    'supplementaries:turn_table',
  ].forEach(function (id) {
    replaceInputID(id, 'minecraft:cobblestone', '#minecraft:stone_crafting_materials');
  });

  // Feather variants in place of Minecraft Feathers in some recipes:
  [ // Recipe ID:
    'minecraft:writable_book',
    'xercamusic:music_sheet',
  ].forEach(function (id) {
    replaceInputID(id, 'minecraft:feather', '#forge:feathers');
  });
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:feather', '#forge:feathers', true);

  // Vine variants in place of Minecraft Vines in some recipes:
  [ // Recipe ID:
    'minecraft:mossy_cobblestone_from_vine',
    'minecraft:mossy_stone_bricks_from_vine',
    'alexsmobs:vine_lasso',
    'valhelsia_structures:lapidified_jungle_log',
    
  ].forEach(function (id) {
    replaceInputID(id, 'minecraft:vine', '#valhelsia:vines/green');
  });

  // Kelp variants in place of Minecraft Kelp in some recipes:
  [ // Recipe ID:
    'minecraft:dried_kelp_from_campfire_cooking',
    'minecraft:dried_kelp_from_smelting',
    'minecraft:dried_kelp_from_smoking',
  ].forEach(function (id) {
    replaceInputID(id, 'minecraft:kelp', '#valhelsia:kelp');
  });
});
