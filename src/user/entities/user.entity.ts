// import { Field, ID, ObjectType,  } from '@nestjs/graphql';
// import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
// import { Role } from './role/user.role';

// @ObjectType()
// @Entity()
// export class User {
//   @PrimaryGeneratedColumn('uuid')
//   @Field(() => ID)
//   id: string;

//   @Column({
//     length: 200,
//     nullable: false,
//   })
//   firstName: string;

//   @Column({
//     length: 200,
//     nullable: false,
//   })
//   lastName: string;

//   @Column({
//     length: 320,
//     unique: true,
//     nullable: false,
//   })
//   email: string;

//   @Column({
//     length: 11,
//     nullable: false,
//   })
//   mainPhone: string;

//   @Column({
//     length: 11,
//     nullable: true,
//   })
//   secondaryPhone: string;

//   @Column({ default: false })
//   isRegisteredWithGoogle: boolean;

//   @Column({
//     type: 'enum',
//     enum: Role,
//     default: Role.USER,
//   })
//   role: Role;

//   @Column({
//     nullable: true,
//   })
//   loginToken: string;

//   @Column({
//     nullable: true,
//   })
//   expirationLoginToken: string;

//   @Column({
//     nullable: true,
//   })
//   stripeCustomerId: string;

//   @DeleteDateColumn()
//   deletedAt: Date;

//   @CreateDateColumn()
//   createdAt: Date;

//   @UpdateDateColumn()
//   updatedAt: Date;
// }
