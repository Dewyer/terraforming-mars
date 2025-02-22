import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';

export class RudamentaryMaterialFusionSystem extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.RUDAMENTARY_MATERIAL_FUSION_SYSTEM,
      tags: [Tag.SCIENCE, Tag.BUILDING],
      cost: 12,

      requirements: {
        tag: Tag.SCIENCE
      },

      metadata: {
        cardNumber: 'G13',
        description: 'Requires 1 science tag. Action: Spend 2 titanium to gain 1 tungstensteel.',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 titanium to gain 1 tungstensteel.', (eb) => {
            eb.titanium(2).startAction.tungstensteel(1);
          });
        }),
      },
    });
  }

  public canAct(player: IPlayer): boolean {
    return player.stock.get(Resource.TITANIUM) >= 2;
  }

  public action(player: IPlayer) {
    player.stock.add(Resource.TITANIUM, -2);
    player.stock.add(Resource.TUNGSTENSTEEL, 1);
    return undefined;
  }
} 