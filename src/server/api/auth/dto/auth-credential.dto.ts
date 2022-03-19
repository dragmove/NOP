import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidationOptions,
} from 'class-validator';

export class AuthCredentialDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsOptional()
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'nickname only accepts English and Number.',
  })
  @IsOptional()
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  // @Matches(/^(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)(?=.*[!@#$%^&*].*).*$/)
  @IsNotEmpty()
  password: string;
}
