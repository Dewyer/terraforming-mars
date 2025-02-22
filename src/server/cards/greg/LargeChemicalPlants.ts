import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';

export class LargeChemicalPlants extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.LARGE_CHEMICAL_PLANTS,
      tags: [Tag.BUILDING, Tag.IV],
      cost: 28,
      victoryPoints: 2,

      requirements: {tag: Tag.IV},
      behavior: {
        production: {
          ptfe: 2,
          pbi: 1,
        },
      },

      metadata: {
        cardNumber: 'G102',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.ptfe(2).br;
            pb.pbi(1);
          });
        }),
        description: 'Requires IV tag. Using wall-sharing technology, increase your PTFE production 2 steps and PBI production 1 step.',
      },
    });
  }
} 