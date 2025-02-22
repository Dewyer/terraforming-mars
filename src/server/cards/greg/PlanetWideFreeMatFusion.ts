import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class PlanetWideFreeMatFusion extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.PLANET_WIDE_FREE_MATERIAL_FUSION,
      tags: [Tag.SCIENCE, Tag.SCIENCE, Tag.SCIENCE],
      cost: 42,
      victoryPoints: 3,

      requirements: {tag: Tag.UHV},
      behavior: {
        production: {megacredits: 30},
      },

      metadata: {
        cardNumber: 'GF05',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(30));
        }),
        description: 'Requires 1 UHV tag. Increase your M€ production 30 steps.',
      },
    });
  }
} 