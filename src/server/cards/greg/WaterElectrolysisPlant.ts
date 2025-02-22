import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';

export class WaterElectrolysisPlant extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.WATER_ELECTROLYSIS_PLANT,
      tags: [Tag.BUILDING],
      cost: 12,
      
      behavior: {
        production: {oxygen: 1},
        stock: {oxygen: 2},
      },

      metadata: {
        cardNumber: 'G7',
        description: 'Requires that you have 2 steel. Increase your oxygen production 1 step and gain 2 oxygen.',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.oxygen(1)).oxygen(2);
        }),
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.steel >= 2;
  }

  public override bespokePlay(player: IPlayer) {
    player.steel -= 2;
    return undefined;
  }
} 