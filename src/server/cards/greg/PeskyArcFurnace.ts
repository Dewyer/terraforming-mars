import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';

export class PeskyArcFurnace extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.PESKY_ARC_FURNACE,
      tags: [Tag.BUILDING, Tag.POWER],
      cost: 12,

      metadata: {
        cardNumber: 'G11',
        renderData: CardRenderer.builder((b) => {
            b.action('Produce 2 steels', (eb) => {
                eb.oxygenRes(1).startAction.steel(2);
            });
        }),
      },
    });
  }

  public canAct(player: IPlayer): boolean {
    return player.stock.get(Resource.OXYGEN) >= 1;
  }

  public action(player: IPlayer) {
    player.stock.add(Resource.OXYGEN, -1);
    player.stock.add(Resource.STEEL, 2);
    return undefined;
  }
} 