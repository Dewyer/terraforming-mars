import {ModuleManifest} from '../ModuleManifest';
import {CardName} from '../../../common/cards/CardName';
import {WaterElectrolysisPlant} from './WaterElectrolysisPlant';
import {KanthalElectricBlastFurnaceArray} from './KanthalElectricBlastFurnaceArray';
import {RTMAlloyElectricBlastFurnace} from './RTMAlloyElectricBlastFurnace';
import {AlloyingHemisphere} from './AlloyingHemisphere';
import {PeskyArcFurnace} from './PeskyArcFurnace';
import {BlueBallsTradeHubs} from './BlueBallsTradeHubs';
import {RudamentaryMaterialFusionSystem} from './RudamentaryMaterialFusionSystem';
import {PeerIntoTheSanhell} from './PeerIntoTheSanhell';
import {IHadThisInMySleave} from './IHadThisInMySleave';

export const GREG_CARD_MANIFEST = new ModuleManifest({
  module: 'greg',
  projectCards: {
    [CardName.WATER_ELECTROLYSIS_PLANT]: {Factory: WaterElectrolysisPlant},
    [CardName.KANTHAL_ELECTRIC_BLAST_FURNACE_ARRAY]: {Factory: KanthalElectricBlastFurnaceArray},
    [CardName.RTM_ALLOY_ELECTRIC_BLAST_FURNACE]: {Factory: RTMAlloyElectricBlastFurnace},
    [CardName.ALLOYING_HEMISPHERE]: {Factory: AlloyingHemisphere},
    [CardName.PESKY_ARC_FURNACE]: {Factory: PeskyArcFurnace},
    [CardName.BLUE_BALLS_TRADE_HUBS]: {Factory: BlueBallsTradeHubs},
    [CardName.RUDAMENTARY_MATERIAL_FUSION_SYSTEM]: {Factory: RudamentaryMaterialFusionSystem},
    [CardName.PEER_INTO_THE_SANHELL]: {Factory: PeerIntoTheSanhell},
    [CardName.I_HAD_THIS_IN_MY_SLEAVE]: {Factory: IHadThisInMySleave},
  },
  corporationCards: {
  },
  globalEvents: {
  },
});

