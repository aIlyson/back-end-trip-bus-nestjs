import { DataSource} from 'typeorm';
import { BusEntity } from './entities/bus.entity';

export const busProviders = [
  {
    provide: 'BUS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(BusEntity),
    inject: ['DATABASE_SOURCE'],
  },
];