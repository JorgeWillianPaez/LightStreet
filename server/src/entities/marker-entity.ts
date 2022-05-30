import { ManyToOne, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { User } from "./user-entity";

@Entity("markers")
export class Marker {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.markers)
  user!: User;
}
