import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {TileType} from '../../../common/TileType';
import {Space} from '../../boards/Space';

export class OceanicOxygenCapture extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.OCEANIC_OXYGEN_CAPTURE,
      tags: [Tag.BUILDING, Tag.IV],
      cost: 16,

      metadata: {
        cardNumber: 'G16',
        renderData: CardRenderer.builder((b) => {
          b.effect('When an ocean tile is placed, get 3 oxygen resources.', (eb) => {
            eb.oceans(1).startEffect.oxygen(3);
          });
        }),
      },
    });
  }

  public onTilePlaced(cardOwner: IPlayer, _activePlayer: IPlayer, space: Space) {
    if (space.tile?.tileType === TileType.OCEAN) {
      cardOwner.stock.add(Resource.OXYGEN, 3, {log: true});
    }
  }
} 