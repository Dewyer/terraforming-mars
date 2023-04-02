import {expect} from 'chai';
import {setOxygenLevel} from '../../TestingUtils';
import {ColonizerTrainingCamp} from '../../../src/server/cards/base/ColonizerTrainingCamp';
import {Game} from '../../../src/server/Game';
import {TestPlayer} from '../../TestPlayer';
import {testGame} from '../../TestGame';

describe('ColonizerTrainingCamp', function() {
  let card: ColonizerTrainingCamp;
  let player: TestPlayer;
  let game: Game;

  beforeEach(function() {
    card = new ColonizerTrainingCamp();
    [game, player] = testGame(2);
  });

  it('Can not play', function() {
    setOxygenLevel(game, 6);
    expect(player.canPlayIgnoringCost(card)).is.not.true;
  });
  it('Should play', function() {
    setOxygenLevel(game, 5);
    expect(player.canPlayIgnoringCost(card)).is.true;

    card.play(player);
    expect(card.getVictoryPoints(player)).to.eq(2);
  });
});
