import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../entity/user.entity';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  /*
  async getAll(): Promise<User[]> {
    const found = await this.find();
    if (!found) {
      throw new NotFoundException(`Can't find datas`);
    }

    return found;
  }

  async getUser(id: number): Promise<User> {
    const found = await this.findOne(id);
    if (!found) {
      throw new NotFoundException(`Can't find data with id: ${id}`);
    }

    return found;
  }
  */

  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { email, password } = authCredentialDto;

    const user = await this.create({
      email,
      password,
    });

    await this.save(user);
  }

  /*
  async updateUser(
    id: number,
    authCredentialDto: AuthCredentialDto,
  ): Promise<void> {
    const { email, password } = authCredentialDto;

    const result = await this.update(id, {
      email,
      password,
    });
    if (result.affected <= 0) {
      throw new NotFoundException(`Can't find data with id: ${id}`);
    }
  }

  /*
  async updateWork(id: number, updateWorkDto: UpdateWorkDto): Promise<void> {
    const { title } = updateWorkDto;

    const result = await this.update(id, {
      title,
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
  */
}
