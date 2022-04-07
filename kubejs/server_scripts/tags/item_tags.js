// priority: 110
// Valhelsia: Origins
// Item Tags
// These are mostly for recipe input unification, but sometimes have other uses.

onEvent('tags.items', event => {

  event.add('forge:crops', 'alexsmobs:banana');

  // Fruits
  event.add('forge:fruits', [
    'minecraft:apple',
    'minecraft:golden_apple',
    'minecraft:enchanted_golden_apple',
    'minecraft:melon_slice',
    'minecraft:sweet_berries',
    'minecraft:glow_berries',
    'ecologics:coconut_slice',
    'ecologics:prickly_pear',
  ]);

  event.add('forge:fruits/apple', [
    'minecraft:apple',
    'minecraft:golden_apple',
    'minecraft:enchanted_golden_apple',
  ]);

  event.add('forge:fruits/baobab', 'byg:baobab_fruit');
  event.add('forge:fruits/coconut', 'ecologics:coconut_slice');
  event.add('forge:fruits/melon', 'minecraft:melon_slice');
  event.add('forge:fruits/prickly_pear', 'ecologics:prickly_pear');

  // Feathers
  event.add('forge:feathers', [
    'alexsmobs:roadrunner_feather',
    'alexsmobs:emu_feather',
    'ecologics:penguin_feather',
  ]);

  // Ingots
  event.add('forge:ingots', [
    'immersiveengineering:ingot_hop_graphite',
  ]);

  // Seeds
  event.add('forge:seeds', [
    'druidcraftrg:hemp_seeds',
  ]);
  event.add('forge:seeds/hemp', [
    'druidcraftrg:hemp_seeds',
    'immersiveengineering:seed'
  ]);

  // Sandstones
  event.add('forge:sandstone', [
    'quark:sandstone_bricks',
    'quark:red_sandstone_bricks',
  ]);

  event.add('forge:sandstone/colorless', [
    'quark:sandstone_bricks',
  ]);
  
  event.add('forge:sandstone/red', [
    'quark:red_sandstone_bricks',
  ]);

  event.add('forge:sandstone/soul', [
    'quark:soul_sandstone',
    'quark:soul_sandstone_bricks',
    'quark:smooth_soul_sandstone',
    'quark:cut_soul_sandstone',
    'quark:chiseled_soul_sandstone',
  ]);

  event.add('forge:sandstone/soulless', [
    'forbidden_arcanus:soulless_sandstone',
    'forbidden_arcanus:cut_soulless_sandstone',
    'forbidden_arcanus:polished_soulless_sandstone',
  ]);

  event.add('forge:sandstone/white', [
    'byg:white_sandstone',
    'byg:white_chiseled_sandstone',
    'byg:white_cut_sandstone',
    'byg:white_smooth_sandstone',
  ]);

  // Leaf Carpets
  event.add('valhelsia:leaf_carpets', allLeafCarpets);

  // Vines
  event.add('valhelsia:vines', [
    'minecraft:vine',
    'minecraft:weeping_vines',
    'minecraft:twisting_vines',
    'quark:cut_vine',
    'valhelsia_structures:hanging_vines',
  ]);

  event.add('valhelsia:vines/green', [
    'minecraft:vine',
    'quark:cut_vine',
    'valhelsia_structures:hanging_vines',
  ]);

  // Kelp
  event.add('valhelsia:kelp', [
    'minecraft:kelp',
    // Upgrade Aquatic Kelps here later.
  ]);

  // MineColonies
  event.add('minecolonies:compostables_poor', [
    '#valhelsia:leaf_carpets',
  ]);

  event.add('minecolonies:compostables', [
    'minecraft:poisonous_potato', // Sorry, not sorry. ;)
    'minecraft:glow_lichen',
    'minecraft:moss_carpet',
    'minecraft:moss_block',
    'minecraft:hanging_roots',
    'minecraft:big_dripleaf',
    'minecraft:small_dripleaf',
    'minecraft:spore_blossom',
    'minecraft:crimson_fungus',
    'minecraft:warped_fungus',
    'minecraft:crimson_roots',
    'minecraft:warped_roots',
    'minecraft:nether_sprouts',
    'minecraft:weeping_vines',
    'minecraft:twisting_vines',
  ]);

  // Quark
  event.add('quark:seed_pouch_holdable', [
    // Add items here to allow them to be added to a seed pouch.
  ]);

});