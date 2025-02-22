import {ModuleManifest} from '../ModuleManifest';
import {CardName} from '../../../common/cards/CardName';
import {WaterElectrolysisPlant} from './WaterElectrolysisPlant';
import {KanthalElectricBlastFurnaceArray} from './KanthalElectricBlastFurnaceArray';
import {RTMAlloyElectricBlastFurnace} from './RTMAlloyElectricBlastFurnace';

export const GREG_CARD_MANIFEST = new ModuleManifest({
  module: 'greg',
  projectCards: {
    [CardName.WATER_ELECTROLYSIS_PLANT]: {Factory: WaterElectrolysisPlant},
    [CardName.KANTHAL_ELECTRIC_BLAST_FURNACE_ARRAY]: {Factory: KanthalElectricBlastFurnaceArray},
    [CardName.RTM_ALLOY_ELECTRIC_BLAST_FURNACE]: {Factory: RTMAlloyElectricBlastFurnace},
  },
  corporationCards: {
  },
  globalEvents: {
  },
});

