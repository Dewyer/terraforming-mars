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
import {OceanicOxygenCapture} from './OceanicOxygenCapture';
import {RePointGlassElectrolysis} from './RePointGlassElectrolysis';
import {StratosieveArray} from './StratosieveArray';
import {ThoriumReactor} from './ThoriumReactor';
import {OpenTopIrradiationPlant} from './OpenTopIrradiationPlant';
import {WetWareVatCenter} from './WetWareVatCenter';
import {FusionReactorMK1} from './FusionReactorMK1';
import {FusionReactorMK2} from './FusionReactorMK2';
import {FusionReactorMK3} from './FusionReactorMK3';
import {SugarCaneEthylaneFarms} from './SugarCaneEthylaneFarms';
import {OffWorldUsedCondomExchange} from './OffWorldUsedCondomExchange';
import {MarsHadDynosours} from './MarsHadDynosours';

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
    [CardName.OCEANIC_OXYGEN_CAPTURE]: {Factory: OceanicOxygenCapture},
    [CardName.RE_POINT_GLASS_ELECTROLYSIS]: {Factory: RePointGlassElectrolysis},
    [CardName.STRATOSIEVE_ARRAY]: {Factory: StratosieveArray},
    [CardName.THORIUM_REACTOR]: {Factory: ThoriumReactor},
    [CardName.OPEN_TOP_IRRADIATION_PLANT]: {Factory: OpenTopIrradiationPlant},
    [CardName.WETWARE_VAT_CENTER]: {Factory: WetWareVatCenter},
    [CardName.FUSION_REACTOR_MK1]: {Factory: FusionReactorMK1},
    [CardName.FUSION_REACTOR_MK2]: {Factory: FusionReactorMK2},
    [CardName.FUSION_REACTOR_MK3]: {Factory: FusionReactorMK3},
    [CardName.SUGAR_CANE_ETHYLANE_FARMS]: {Factory: SugarCaneEthylaneFarms},
    [CardName.OFF_WORLD_USED_CONDOM_EXCHANGE]: {Factory: OffWorldUsedCondomExchange},
    [CardName.MARS_HAD_DYNOSOURS]: {Factory: MarsHadDynosours},
  },
  corporationCards: {
  },
  globalEvents: {
  },
});

