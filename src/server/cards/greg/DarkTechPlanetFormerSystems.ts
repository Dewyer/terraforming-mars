import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';

export class DarkTechPlanetFormerSystems extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.DARK_TECH_PLANET_FORMER_SYSTEMS,
      tags: [Tag.SPACE, Tag.SCIENCE],
      cost: 42,
      victoryPoints: 3,

      requirements: {tag: Tag.ZPM},

      metadata: {
        cardNumber: 'G103',
        renderData: CardRenderer.builder((b) => {
          b.minus().naquadah(2).br;
          b.tr(6);
        }),
        description: 'Requires ZPM tag. Spend 2 naquadah to gain 6 TR. 3 VP',
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.stock.get(Resource.NAQUADAH) >= 2;
  }

  public override bespokePlay(player: IPlayer) {
    player.stock.deduct(Resource.NAQUADAH, 2);
    player.increaseTerraformRating(6);
    return undefined;
  }
} 