import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AdminData {
  @Field(() => [String])
  systemLogs!: string[];

  @Field()
  secretStats!: string;
}
