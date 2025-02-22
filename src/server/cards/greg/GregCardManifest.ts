import {CardName} from '../../../common/cards/CardName';
import {ModuleManifest} from '../ModuleManifest';
import {Nyipzuty} from './Nyipzuty';
import {WaterElectrolysisPlant} from './WaterElectrolysisPlant';

export const GREG_CARD_MANIFEST = new ModuleManifest({
  module: 'greg',
  projectCards: {
    [CardName.NYIPZUTY]: {Factory: Nyipzuty},
    [CardName.WATER_ELECTROLYSIS_PLANT]: {Factory: WaterElectrolysisPlant},
  },

  corporationCards: {
    // [CardName.LAKEFRONT_RESORTS]: {Factory: LakefrontResorts},
  },
  globalEvents: {
  },
});

