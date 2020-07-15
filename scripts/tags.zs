#priority 500
import crafttweaker.api.tag.MCTag;

// Remove vanilla Mushroom Blocks from leaves tag to prevent issues with them being not treated as solid.
// Does mean they can't be sheared anymore, but that's less of a concern.
<tag:minecraft:leaves>.removeBlocks(<block:minecraft:brown_mushroom_block>);
<tag:minecraft:leaves>.removeBlocks(<block:minecraft:red_mushroom_block>);