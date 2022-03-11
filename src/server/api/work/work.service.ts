import { Injectable, NotFoundException } from '@nestjs/common';
import { Work, WorkCategory } from './work.model';
import { v1 as uuid } from 'uuid';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';

const WORKS = {
  'no-1': {
    title: 'First Post!',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed suscipit quam, sit amet feugiat ligula. Nunc sit amet velit vestibulum, mattis orci gravida, aliquam velit. Donec eget lectus nec ipsum suscipit gravida et et odio. Morbi hendrerit dui scelerisque, imperdiet ligula in, ornare risus. Aliquam blandit sem risus, a ornare orci finibus ut. Maecenas interdum lacus arcu, nec finibus nibh semper quis. Vivamus venenatis pharetra ligula, eget semper justo finibus et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam finibus accumsan elit, et ornare nulla accumsan id. Cras nec leo sed ex egestas malesuada. Nullam a bibendum libero. Cras ullamcorper massa sed odio euismod vulputate. Nullam at ullamcorper dolor. Maecenas et fermentum arcu. Sed interdum nunc neque, eu consectetur ex commodo finibus. Nunc interdum aliquam purus, eu lobortis enim semper et.',
      'Ut sed dolor odio. Mauris cursus aliquet tortor, a posuere mi elementum in. Morbi sed efficitur mauris. Donec sed nulla efficitur, finibus massa ut, aliquet elit. Praesent eu mattis velit. Fusce sodales tincidunt mi, ut placerat turpis lobortis eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam at scelerisque lacus, ut commodo leo. Morbi vitae iaculis arcu. Donec finibus erat sed tristique feugiat. Morbi lorem tellus, elementum et facilisis eu, egestas fringilla eros. In quis arcu aliquam, ornare nulla malesuada, convallis massa. Donec tellus neque, tempor eu porttitor at, malesuada eget tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vel pellentesque elit. Morbi semper purus velit, a pulvinar eros blandit vel.',
    ],
  },
  'no-2': {
    title: 'Second Post!',
    content: [
      'Nulla sed purus ullamcorper, volutpat leo ac, blandit sem. Aenean efficitur ante rhoncus, lobortis est nec, consequat nisl. Fusce quis semper ligula, eget commodo magna. In tincidunt nisl sed dui ornare, nec pulvinar nibh laoreet. Suspendisse lobortis elit at nunc egestas fermentum. Etiam leo dui, fermentum ac nulla et, hendrerit varius arcu. Quisque porttitor congue mattis. Mauris non lorem suscipit turpis dictum porttitor. Nullam eget blandit felis. Duis eu erat ac mauris egestas placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      'Etiam vel tellus sollicitudin, laoreet quam id, dignissim eros. Suspendisse dapibus tempor magna eget eleifend. Morbi molestie arcu id sagittis tristique. Suspendisse luctus id velit et elementum. Cras gravida sodales quam vel iaculis. Cras aliquet ex a placerat tincidunt. Fusce at ligula urna. Pellentesque id sapien lacus. Nullam eleifend ultrices tortor a hendrerit. Vivamus cursus leo eget tortor porttitor finibus. Quisque at quam gravida, aliquam orci ut, volutpat enim. Vivamus sit amet lobortis lacus. In aliquet consectetur diam vitae lacinia. Suspendisse ultrices malesuada turpis ac congue. Pellentesque vestibulum, nulla nec mollis euismod, sapien ipsum lobortis tortor, nec pellentesque sem nulla gravida diam.',
    ],
  },
};

@Injectable()
export class WorkService {
  private works: Work[] = [
    {
      id: '1',
      title: 'LGE Mobile GUI',
      titleKor: '엘지전자 모바일 GUI',
      subtitle: '',
      description: '',
      url: '',
      heroImages: [],
      thumbnails: [],
      prizes: [],
      ranks: [],
      workSummary: 'Flash develop',
      workDetail: '',
      period: '2006.03 - 2006.04',
      releaseDate: '',
      copyright: 'Saltcake',
      client: 'LGE',
      category: WorkCategory.PROJECT,
    },
    {
      id: '2',
      title: 'Ritzcarlton seoul website',
      titleKor: '리츠칼튼 서울 웹사이트',
      subtitle: '',
      description: '',
      url: '',
      heroImages: [],
      thumbnails: [],
      prizes: [],
      ranks: [],
      workSummary: 'Flash develop',
      workDetail: '',
      period: '2006.04 - 2006.05',
      releaseDate: '',
      copyright: 'Saltcake',
      client: 'Ritzcarlton seoul',
      category: WorkCategory.PROJECT,
    },
  ];

  public getAll(): Work[] {
    return this.works;
  }

  public get(id: number | string): Work | never {
    const work: Work = this.works.find((work) => work.id === id);
    if (!work) {
      throw new NotFoundException(`Can't find data with id: ${id}`);
    }

    return work;
  }

  public create(createWorkDto: CreateWorkDto): Work {
    const work: Work = {
      ...createWorkDto,
      id: uuid(),
    };

    this.works.push(work);
    return work;
  }

  public update(
    id: number | string,
    updateWorkDto: UpdateWorkDto,
  ): Work | never {
    const work: Work = this.get(id);

    // FIXME: work 업데이트
    return work;
  }

  public delete(id: number | string): void {
    // TODO: NotFoundException
    const work: Work = this.get(id);

    const works: Work[] = this.works.filter((w) => w.id !== work.id);
    this.works = works;
  }
}
