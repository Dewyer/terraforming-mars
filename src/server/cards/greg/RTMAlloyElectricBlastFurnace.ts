import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {SelectOption} from '../../inputs/SelectOption';
import {OrOptions} from '../../inputs/OrOptions';
import {IActionCard} from '../ICard';

export class RTMAlloyElectricBlastFurnace extends Card implements IProjectCard, IActionCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.RTM_ALLOY_ELECTRIC_BLAST_FURNACE,
      tags: [Tag.BUILDING, Tag.IV],
      cost: 21,

      metadata: {
        cardNumber: 'G9',
        description: 'Requires IV-tier metal (Tungstensteel or better). Action: Spend 3 Energy to either gain 2 Tungstensteel, 1 Naquadah, or 3 Titanium.',
        renderData: CardRenderer.builder((b) => {
          b.action('Produce 2 Tungstensteel', (eb) => {
            eb.energy(3).startAction.tungstensteel(2);
          }).br;
          b.or().br;
          b.action('Produce 3 Titanium', (eb) => {
            eb.energy(3).startAction.titanium(3);
          }).br;
          b.or().br;
          b.action('Produce 1 Naquadah', (eb) => {
            eb.energy(3).startAction.naquadah(1);
          });
        }),
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.tungstensteel >= 1 || player.naquadah >= 1 || player.neutronium >= 1;
  }

  public canAct(player: IPlayer): boolean {
    return player.energy >= 3;
  }

  public action(player: IPlayer) {
    player.energy -= 3;

    return new OrOptions(
      new SelectOption('Gain 3 Titanium').andThen(() => {
        player.titanium += 3;
        return undefined;
      }),
      new SelectOption('Gain 2 Tungstensteel').andThen(() => {
        player.stock.add(Resource.TUNGSTENSTEEL, 2);
        return undefined;
      }),
      new SelectOption('Gain 1 Naquadah').andThen(() => {
        player.stock.add(Resource.NAQUADAH, 1);
        return undefined;
      }),
    );
  }
} 