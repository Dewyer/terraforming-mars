import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';

export class OffWorldUsedCondomExchange extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.OFF_WORLD_USED_CONDOM_EXCHANGE,
      tags: [Tag.EARTH],
      cost: 12,

      requirements: {tag: Tag.EARTH},
      behavior: {
        production: {ptfe: 2},
      },

      metadata: {
        cardNumber: 'G6969',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.ptfe(2));
        }),
        description: 'Requires 1 Earth tag. Increase your PTFE production 2 steps.',
      },
    });
  }
} 