import {
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class LeadSources {
  @PrimaryGeneratedColumn("uuid")
  leadSourceId!: string;

  @Column({ type: "varchar", nullable: true })
  leadSourceCategory: string;

  @Column({ type: "varchar" })
  createdBy: string;

  @CreateDateColumn({ type: "bigint", default: new Date().getTime() })
  createdAt: number;

  @Column({ type: "varchar", nullable: true })
  updatedBy: string;

  @UpdateDateColumn({ type: "bigint", default: new Date().getTime() })
  updatedAt: number;

  @Column({ type: "varchar", nullable: false })
  leadSourceSubCategory: string;

  @BeforeUpdate()
  updateManagedAt(): void {
    this.updatedAt = new Date().getTime();
  }
}
