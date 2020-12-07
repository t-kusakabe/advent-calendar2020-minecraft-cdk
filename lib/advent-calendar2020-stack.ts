import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

import RecipesVpcMultiAz from './recipes/VPC/multi_az';
import RecipesEcsFargate from './recipes/ECS/fargate';

export class AdventCalendar2020Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // === VPC ===
    const vpcResource = RecipesVpcMultiAz({
      context: this
    });

    // === ECS ===
    RecipesEcsFargate({
      context: this,
      vpc: vpcResource.vpc
    });
  }
}
