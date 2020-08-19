import { Module } from '@nestjs/common';
import { ConnectorController } from './connector.controller';

@Module({
  controllers: [ConnectorController]
})
export class ConnectorModule {}
