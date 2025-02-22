import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';


export class BlueBallsTradeHubs extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.BLUE_BALLS_TRADE_HUBS,
      tags: [Tag.BUILDING, Tag.CITY],
      cost: 15,
      victoryPoints: 1,

      requirements: {cities: 3, all: true},

      metadata: {
        cardNumber: 'G12',
        description: 'Requires 3 cities on Mars. Increase your tungstensteel production 1 step.',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.tungstensteel(1));
        }),
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    const cities = player.game.board.getCities().length;
    return cities >= 3;
  }

  public override bespokePlay(player: IPlayer) {
    player.production.add(Resource.TUNGSTENSTEEL, 1);
    return undefined;
  }
} 