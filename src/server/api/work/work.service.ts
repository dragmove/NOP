import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, PluralResult } from '../../../shared/types/data';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Work } from './work.entity';
import { WorkRepository } from './work.repository';

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(WorkRepository)
    private workRepository: WorkRepository,
  ) {}

  async getAll(): Promise<ApiResponse<PluralResult<Work>>> {
    const result = await this.workRepository.getWorkAll();
    return {
      statusCode: 0,
      message: 'ok',
      result: {
        data: result,
        total: result.length,
      },
    };
  }

  async get(id: number): Promise<ApiResponse<Work>> {
    const result = await this.workRepository.getWork(id);
    return {
      statusCode: 0,
      message: 'ok',
      result,
    };
  }

  async create(createWorkDto: CreateWorkDto): Promise<ApiResponse<void>> {
    await this.workRepository.createWork(createWorkDto);
    return {
      statusCode: 0,
      message: 'ok',
    };
  }

  async update(
    id: number,
    updateWorkDto: UpdateWorkDto,
  ): Promise<ApiResponse<void>> {
    await this.workRepository.updateWork(id, updateWorkDto);
    return {
      statusCode: 0,
      message: 'ok',
    };
  }

  async delete(id: number): Promise<ApiResponse<void>> {
    await this.workRepository.deleteWork(id);
    return {
      statusCode: 0,
      message: 'ok',
    };
  }

  // private works: Work[] = [
  //   {
  //     id: '1',
  //     title: 'LGE Mobile GUI',
  //     titleKor: '엘지전자 모바일 GUI',
  //     subtitle: '',
  //     description: '',
  //     url: '',
  //     heroImages: [],
  //     thumbnails: [],
  //     prizes: [],
  //     ranks: [],
  //     workSummary: 'Flash develop',
  //     workDetail: '',
  //     period: '2006.03 - 2006.04',
  //     releaseDate: '',
  //     copyright: 'Saltcake',
  //     client: 'LGE',
  //     category: WorkCategory.PROJECT,
  //   },
  //   {
  //     id: '2',
  //     title: 'Ritzcarlton seoul website',
  //     titleKor: '리츠칼튼 서울 웹사이트',
  //     subtitle: '',
  //     description: '',
  //     url: '',
  //     heroImages: [],
  //     thumbnails: [],
  //     prizes: [],
  //     ranks: [],
  //     workSummary: 'Flash develop',
  //     workDetail: '',
  //     period: '2006.04 - 2006.05',
  //     releaseDate: '',
  //     copyright: 'Saltcake',
  //     client: 'Ritzcarlton seoul',
  //     category: WorkCategory.PROJECT,
  //   },
  // ];
}
