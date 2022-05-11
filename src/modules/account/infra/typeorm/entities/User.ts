import { v4 as uuidV4 } from "uuid";
import { IsEmail, MaxLength, MinLength, minLength } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  @MaxLength(25)
  @MinLength(3)
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column()
  driver_license: string;

  @Column()
  isAdmin: boolean;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
