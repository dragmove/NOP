import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Work } from '../../entity/work.entity';

@EntityRepository(Work)
export class WorkRepository extends Repository<Work> {
  async getWorkAll(): Promise<Work[]> {
    const found = await this.find();
    console.log('found :', found);

    if (!found) {
      throw new NotFoundException(`Can't find datas`);
    }

    return found;
  }

  async getWork(id: number): Promise<Work> {
    const found = await this.findOne(id);
    console.log('found :', found);

    if (!found) {
      throw new NotFoundException(`Can't find data with id: ${id}`);
    }

    return found;
  }

  async createWork(createWorkDto: CreateWorkDto): Promise<void> {
    const {
      title,
      subtitle,
      // description,
      // url,
      // prizes,
      // workSummary,
      // workDetail,
      // period,
      // releaseDate,
      // copyright,
      // client,
    } = createWorkDto;

    const work = await this.create({
      title,
      subtitle,
      // description,
      // url,
      // prizes,
      // workSummary,
      // workDetail,
      // period,
      // releaseDate,
      // copyright,
      // client,
    });
    await this.save(work);
  }

  async updateWork(id: number, updateWorkDto: UpdateWorkDto): Promise<void> {
    const {
      title,
      // subtitle,
      // description,
      // url,
      // prizes,
      // workSummary,
      // workDetail,
      // period,
      // releaseDate,
      // copyright,
      // client,
    } = updateWorkDto;

    const result = await this.update(id, {
      title,
      // subtitle,
      // description,
      // url,
      // prizes,
      // workSummary,
      // workDetail,
      // period,
      // releaseDate,
      // copyright,
      // client,
    });
    if (result.affected <= 0) {
      throw new NotFoundException(`Can't find data with id: ${id}`);
    }
  }

  async deleteWork(id: number): Promise<void> {
    const result = await this.delete(id);
    if (result.affected <= 0) {
      throw new NotFoundException(`Can't find data with id: ${id}`);
    }
  }
}
