import {GlobalEventName} from '../../common/turmoil/globalEvents/GlobalEventName';
import {LawSuit} from '../cards/promo/LawSuit';
import {IPlayer} from '../IPlayer';
import {Resource} from '../../common/Resource';
import {Units} from '../../common/Units';

export class Production {
  private units: Units;
  private player: IPlayer;

  constructor(player: IPlayer, units: Units = Units.EMPTY) {
    this.player = player;
    this.units = Units.of(units);
  }
  public get megacredits() {
    return this.units.megacredits;
  }
  public get steel() {
    return this.units.steel;
  }
  public get titanium() {
    return this.units.titanium;
  }
  public get plants() {
    return this.units.plants;
  }
  public get energy() {
    return this.units.energy;
  }
  public get heat() {
    return this.units.heat;
  }

  public get tungstensteel() {
    return this.units.tungstensteel;
  }

  public get naquadah() {
    return this.units.naquadah;
  }

  public get neutronium() {
    return this.units.neutronium;
  }

  public get oxygen() {
    return this.units.oxygen;
  }

  public get radon() {
    return this.units.radon;
  }

  public get ptfe() {
    return this.units.ptfe;
  }

  public get pbi() {
    return this.units.pbi;
  }

  public get(resource: Resource): number {
    return this.units[resource];
  }

  public override(units: Partial<Units>) {
    this.units = Units.of({...units});
  }

  public asUnits(): Units {
    return {...this.units};
  }

  public add(
    resource: Resource,
    amount : number,
    options? : { log: boolean, from? : IPlayer | GlobalEventName, stealing?: boolean},
  ) {
    const adj = resource === Resource.MEGACREDITS ? -5 : 0;
    const delta = (amount >= 0) ? amount : Math.max(amount, -(this.units[resource] - adj));
    this.units[resource] += delta;

    if (options?.log === true) {
      this.player.logUnitDelta(resource, amount, 'production', options.from, options.stealing);
    }

    const from = options?.from;
    if (typeof(from) === 'object') {
      LawSuit.resourceHook(this.player, resource, delta, from);
    }

    // Mons Insurance hook
    if (options?.from !== undefined && delta < 0 && (typeof(from) === 'object' && from.id !== this.player.id)) {
      this.player.resolveInsurance();
    }

    for (const card of this.player.tableau) {
      card.onProductionGain?.(this.player, resource, amount);
    }
  }

  public canAdjust(units: Units): boolean {
    return this.units.megacredits + units.megacredits >= -5 &&
      this.units.steel + units.steel >= 0 &&
      this.units.titanium + units.titanium >= 0 &&
      this.units.plants + units.plants >= 0 &&
      this.units.energy + units.energy >= 0 &&
      this.units.tungstensteel + units.tungstensteel >= 0 &&
      this.units.naquadah + units.naquadah >= 0 &&
      this.units.neutronium + units.neutronium >= 0 &&
      this.units.oxygen + units.oxygen >= 0 &&
      this.units.radon + units.radon >= 0 &&
      this.units.ptfe + units.ptfe >= 0 &&
      this.units.pbi + units.pbi >= 0 &&
      this.units.heat + units.heat >= 0;
  }

  public adjust(units: Units, options?: {log: boolean, from?: IPlayer}) {
    if (units.megacredits !== undefined) {
      this.add(Resource.MEGACREDITS, units.megacredits, options);
    }

    if (units.steel !== undefined) {
      this.add(Resource.STEEL, units.steel, options);
    }

    if (units.titanium !== undefined) {
      this.add(Resource.TITANIUM, units.titanium, options);
    }

    if (units.plants !== undefined) {
      this.add(Resource.PLANTS, units.plants, options);
    }

    if (units.energy !== undefined) {
      this.add(Resource.ENERGY, units.energy, options);
    }

    if (units.heat !== undefined) {
      this.add(Resource.HEAT, units.heat, options);
    }

    if (units.tungstensteel !== undefined) {
      this.add(Resource.TUNGSTENSTEEL, units.tungstensteel, options);
    }

    if (units.naquadah !== undefined) {
      this.add(Resource.NAQUADAH, units.naquadah, options);
    }

    if (units.neutronium !== undefined) {
      this.add(Resource.NEUTRONIUM, units.neutronium, options);
    }

    if (units.oxygen !== undefined) {
      this.add(Resource.OXYGEN, units.oxygen, options);
    }

    if (units.radon !== undefined) {
      this.add(Resource.RADON, units.radon, options);
    }

    if (units.ptfe !== undefined) {
      this.add(Resource.PTFE, units.ptfe, options);
    }

    if (units.pbi !== undefined) {
      this.add(Resource.PBI, units.pbi, options);
    }
  }
}
