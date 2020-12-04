import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as AdventCalendar2020 from '../lib/advent-calendar2020-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AdventCalendar2020.AdventCalendar2020Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
