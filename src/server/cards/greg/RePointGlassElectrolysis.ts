import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';

export class RePointGlassElectrolysis extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.RE_POINT_GLASS_ELECTROLYSIS,
      tags: [Tag.BUILDING, Tag.CITY],
      cost: 14,

      metadata: {
        cardNumber: 'G17',
        description: 'Gain 1 oxygen production for each city tile.',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.oxygenRes(1).slash().city();
          });
        }),
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    const cities = player.game.board.getCities().length;
    player.production.add(Resource.OXYGEN, cities, {log: true});
    return undefined;
  }
} 