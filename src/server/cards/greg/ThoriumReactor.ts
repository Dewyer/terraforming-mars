import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';

export class ThoriumReactor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.THORIUM_REACTOR,
      tags: [Tag.POWER, Tag.BUILDING],
      cost: 36,

      metadata: {
        cardNumber: 'G70',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.energy(3).radon(1);
          });
        }),
        description: 'Increase your energy production 3 steps and radon production 1 step.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    player.production.add(Resource.ENERGY, 3);
    player.production.add(Resource.RADON, 1);
    return undefined;
  }
} 