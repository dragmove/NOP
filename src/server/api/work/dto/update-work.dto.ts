import { IsArray, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { WorkCategory } from '../../../../shared/enums/work';

export class UpdateWorkDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  // @IsString()
  // @IsNotEmpty()
  // titleKor: string;

  @IsString()
  @IsOptional()
  subtitle: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  url: string;

  // @IsArray()
  // @IsOptional()
  // heroImages: string[];

  // @IsArray()
  // @IsOptional()
  // thumbnails: string[];

  @IsArray()
  @IsOptional()
  prizes: string[];

  // @IsArray()
  // @IsOptional()
  // ranks: string[];

  // @IsString()
  // @IsOptional()
  // workSummary: string;

  // @IsString()
  // @IsOptional()
  // workDetail: string;

  // @IsString()
  // @IsOptional()
  // period: string;

  // @IsString()
  // @IsOptional()
  // releaseDate: string;

  // @IsString()
  // @IsOptional()
  // copyright: string;

  // @IsString()
  // @IsOptional()
  // client: string;

  // @IsNotEmpty()
  // category: WorkCategory;
}
