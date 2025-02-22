import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';

export class StratosieveArray extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.STRATOSIEVE_ARRAY,
      tags: [Tag.VENUS, Tag.SPACE],
      cost: 25,

      requirements: {venus: 8},
      metadata: {
        cardNumber: 'G69',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.radon(3));
        }),
        description: 'Requires Venus 8%. Increase your radon production 3 steps.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    player.production.add(Resource.RADON, 3);
    return undefined;
  }
} 
