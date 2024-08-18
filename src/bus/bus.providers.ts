import { DataSource} from 'typeorm';
import { Bus } from './entities/bus.entity';

export const busProviders = [
  {
    provide: 'BUS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Bus),
    inject: ['DATABASE_SOURCE'],
  },
];