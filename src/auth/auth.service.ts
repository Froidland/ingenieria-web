import { ForbiddenException, Injectable } from '@nestjs/common';
import { SignUpDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { SignInDto } from './dto/signing.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async singup(dto: SignUpDto) {
    // generate password hash
    const hash = await argon.hash(dto.password);
    // save new user in the db
    try {
      const user = await this.prisma.user.create({
        data: {
          firstName: dto.firstName,
          lastName: dto.lastName,
          email: dto.email,
          hash,
        },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      // return the saved user
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        // thrown when trying to create a record with a unique field
        // that already exists
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: SignInDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if user does not exist throw exception
    if (!user) {
      throw new ForbiddenException('Incorrect credentials');
    }

    // compare password
    const passwordMatches = await argon.verify(user.hash, dto.password);
    // if password incorrect throw exception
    if (!passwordMatches) {
      throw new ForbiddenException('Incorrect credentials');
    }

    // return the user
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
