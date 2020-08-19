import { Module } from '@nestjs/common'
import { ConnectorModule } from './connector/connector.module'

@Module({
  imports: [ConnectorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
