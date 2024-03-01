import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthDto {
  @IsString()
  @IsNotEmpty({
    message: 'Please fill out this required field!',
  })
  name: string;

  @IsString()
  @IsNotEmpty({
    message: 'Please fill out this required field!',
  })
  surname: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({
    message: 'Please fill out this required field!',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 25, {
    message:
      'Your password must be at least 6 characters long and at most 25 characters long.',
  })
  password: string;
}
