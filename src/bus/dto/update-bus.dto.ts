import { PartialType } from '@nestjs/swagger';
import { CreateBusDto } from './create-bus.dto';

export class UpdateBusDto extends PartialType(CreateBusDto) {}
