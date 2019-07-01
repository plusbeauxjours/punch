// import bcrypt from "bcrypt";
import { IsEmail } from "class-validator";
import {
  BaseEntity,
  // BeforeInsert,
  // BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import Place from "./Place";

// const BCRYPT_ROUNDS = 10;

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text", nullable: true })
  @IsEmail()
  email: string | null;

  @Column({ type: "boolean", default: false })
  verifiedEmail: boolean;

  @Column({ type: "text" })
  firstName: string;

  @Column({ type: "text" })
  lastName: string;

  @Column({ type: "int", nullable: true })
  age: number;

  @Column({ type: "text", nullable: true })
  gender: number;

  // @Column({ type: "text", nullable: true })
  // password: string;

  @Column({ type: "text", nullable: true })
  phoneNumber: string;

  @Column({ type: "boolean", default: false })
  verifiedPhoneNumber: boolean;

  @Column({ type: "text" })
  profilePhoto: string;

  @Column({ type: "double precision", default: 0 })
  lastLng: number;

  @Column({ type: "double precision", default: 0 })
  lastLat: number;

  @Column({ type: "double precision", default: 0 })
  lastOrientation: number;

  @Column({ type: "text", nullable: true })
  fbId: string;

  @OneToMany(type => Place, place => place.user)
  places: Place[];

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // public comparePassword(password: string): Promise<boolean> {
  //   return bcrypt.compare(password, this.password);
  // }

  // @BeforeInsert()
  // @BeforeUpdate()
  // async savePassword(): Promise<void> {
  //   if (this.password) {
  //     const hashedPassword = await this.hashPassword(this.password);
  //     this.password = hashedPassword;
  //   }
  // }

  // private hashPassword(password: string): Promise<string> {
  //   return bcrypt.hash(password, BCRYPT_ROUNDS);
  // }
}

export default User;
