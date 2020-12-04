#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AdventCalendar2020Stack } from '../lib/advent-calendar2020-stack';

const app = new cdk.App();
new AdventCalendar2020Stack(app, 'AdventCalendar2020Stack');
