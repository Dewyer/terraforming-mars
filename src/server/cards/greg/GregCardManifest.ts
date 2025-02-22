import {CardName} from '../../../common/cards/CardName';
import {ModuleManifest} from '../ModuleManifest';
import {Nyipzuty} from './Nyipzuty';

export const GREG_CARD_MANIFEST = new ModuleManifest({
  module: 'greg',
  projectCards: {
    [CardName.NYIPZUTY]: {Factory: Nyipzuty},
  },

  corporationCards: {
    // [CardName.LAKEFRONT_RESORTS]: {Factory: LakefrontResorts},
  },
  globalEvents: {
  },
});

