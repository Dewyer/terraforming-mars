import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';

export class KanthalElectricBlastFurnaceArray extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.KANTHAL_ELECTRIC_BLAST_FURNACE_ARRAY,
      tags: [Tag.BUILDING, Tag.IV],
      cost: 18,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'G8',
        description: 'Requires IV-tier metal (Tungstensteel or better). Produces 1 Tungstensteel every 70 years at a cost of massive amounts of power.',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(3).br;
            pb.tungstensteel(1);
          });
        }),
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.tungstensteel >= 1 || player.naquadah >= 1 || player.neutronium >= 1;
  }

  public override bespokePlay(player: IPlayer) {
    player.production.add(Resource.ENERGY, -3);
    player.production.add(Resource.TUNGSTENSTEEL, 1);
    return undefined;
  }
} 