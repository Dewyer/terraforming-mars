import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {SelectOption} from '../../inputs/SelectOption';
import {OrOptions} from '../../inputs/OrOptions';
import {IActionCard} from '../ICard';

export class FusionReactorMK2 extends Card implements IProjectCard, IActionCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.FUSION_REACTOR_MK2,
      tags: [Tag.POWER, Tag.ZPM],
      cost: 42,

      requirements: {
        tag: Tag.IV,
      },

      metadata: {
        cardNumber: 'GF03',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 radon to gain 2 tungstensteel', (eb) => {
            eb.radon(1).startAction.tungstensteel(2);
          }).br;
          b.or().br;
          b.action('Spend 2 radon to gain 2 naquadah', (eb) => {
            eb.radon(2).startAction.naquadah(2);
          });
        }),
        description: 'Requires 1 PTFE production. Advanced fusion reactor capable of radon fusion.',
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.production.ptfe >= 1;
  }

  public canAct(player: IPlayer): boolean {
    return player.stock.get(Resource.RADON) >= 3;
  }

  public action(player: IPlayer) {
    const options: Array<SelectOption> = [];

    if (player.stock.get(Resource.RADON) >= 3) {
      options.push(new SelectOption('Fuse 1 radon into tungstensteel (gain 2 tungstensteel)').andThen(() => {
        player.stock.deduct(Resource.RADON, 1);
        player.stock.add(Resource.TUNGSTENSTEEL, 2);
        return undefined;
      }));
    }

    if (player.stock.get(Resource.RADON) >= 2) {
      options.push(new SelectOption('Fuse 2 radon into naquadah (gain 2 naquadah)').andThen(() => {
        player.stock.deduct(Resource.RADON, 2);
        player.stock.add(Resource.NAQUADAH, 2);
        return undefined;
      }));
    }

    if (options.length === 0) return undefined;
    if (options.length === 1) return options[0];
    
    return new OrOptions(...options);
  }
} 