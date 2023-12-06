<<<<<<< HEAD
export class CreateUserDto {
    pseudo: string;
    mail: string;
  }
=======
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsDate, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'This field represents the new user pseudo',
    minLength: 5,
    maxLength: 20,
  })
  @IsString()
  @Length(5, 20)
  pseudo: string;

  @ApiProperty({
    description: 'This field represents the new user username',
    minLength: 5,
    maxLength: 30,
  })
  @IsString()
  @Length(5, 30)
  username: string;

  @ApiProperty({
    description: 'This field represents the new user password',
    minLength: 72,
    maxLength: 72,
  })
  @IsString()
  @Length(72, 72)
  password: string;

  @ApiProperty({
    description: 'This field represents the new user created_at',
  })
  @IsDate()
  created_at : Date;
}
>>>>>>> 4356d64d395181e18b5f7ab3a3af45ad96ee7a62
