// priority: 0
// Valhelsia: Volatile
// REI Blacklist

onEvent('rei.hide.items', event => {

  // Hide debug items, logos, and similar clutter.
  event.hide([
    'minecraft:barrier',
    'minecraft:jigsaw',
    'minecraft:light',
    'minecraft:structure_block',
    'minecraft:structure_void',
    'alexsmobs:tab_icon',
    'alexsmobs:vine_lasso_inventory',
    'alexsmobs:vine_lasso_hand',
    'carryon:entity_item',
    'carryon:tile_item',
    'citadel:debug',
    'citadel:citadel_book',
    'citadel:effect_item',
    'citadel:fancy_item',
    'titanium:block_test',
    'titanium:block_twenty_four_test',
    'titanium:block_asset_test',
    'titanium:machine_test',
    'titanium:creative_generator',
    'immersiveengineering:fake_icon_birthday',
    'immersiveengineering:fake_icon_lucky',
    'immersiveengineering:fake_icon_drillbreak',
    'immersiveengineering:fake_icon_ravenholm',
    'valhelsia_tweaks:birthday_cake', // Seasonal stuff should usually be a surprise.
    'valhelsia_tweaks:valhelsia_firework_rocket',
  ]);

  // Hide Disabled Items
  event.hide([
    'valhelsia_structures:explorers_tent', // Unfinished.
    'valhelsia_structures:hibiscus', // Unfinished.
    'valhelsia_structures:giant_fern', // Unfinished.
  ]);
});

onEvent('rei.hide.items', event => {
  // Hide Fluids.
});