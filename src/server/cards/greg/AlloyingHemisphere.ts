import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';

export class AlloyingHemisphere extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ALLOYING_HEMISPHERE,
      tags: [Tag.BUILDING, Tag.SPACE, Tag.ZPM],
      cost: 30,
      victoryPoints: 2,

      metadata: {
        cardNumber: 'G10',
        description: 'Requires that you have tungstensteel production. Increase your naquadah production 3 steps.',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.naquadah(3));
        }),
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.production.tungstensteel >= 1;
  }

  public override bespokePlay(player: IPlayer) {
    player.production.add(Resource.NAQUADAH, 3);
    return undefined;
  }
} 