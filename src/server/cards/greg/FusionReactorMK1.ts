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

export class FusionReactorMK1 extends Card implements IProjectCard, IActionCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.FUSION_REACTOR_MK1,
      tags: [Tag.POWER, Tag.ZPM],
      cost: 28,

      metadata: {
        cardNumber: 'GF02',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 oxygen to gain 2 titanium', (eb) => {
            eb.oxygenRes(1).startAction.titanium(2);
          }).br;
          b.or().br;
          b.action('Spend 2 oxygen to gain 1 naquadah', (eb) => {
            eb.oxygenRes(2).startAction.naquadah(1);
          });
        }),
        description: 'Basic fusion reactor capable of oxygen fusion.',
      },
    });
  }

  public canAct(player: IPlayer): boolean {
    return player.stock.get(Resource.OXYGEN) >= 3;
  }

  public action(player: IPlayer) {
    const options: Array<SelectOption> = [];

    if (player.stock.get(Resource.OXYGEN) >= 1) {
      options.push(new SelectOption('Fuse 1 oxygen into titanium (gain 2 titanium)').andThen(() => {
        player.stock.deduct(Resource.OXYGEN, 1);
        player.titanium += 2;
        return undefined;
      }));
    }

    if (player.stock.get(Resource.OXYGEN) >= 5) {
      options.push(new SelectOption('Fuse 2 oxygen into naquadah (gain 1 naquadah)').andThen(() => {
        player.stock.deduct(Resource.OXYGEN, 2);
        player.stock.add(Resource.NAQUADAH, 1);
        return undefined;
      }));
    }

    if (options.length === 0) return undefined;
    if (options.length === 1) return options[0];
    
    return new OrOptions(...options);
  }
} 