import {
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    Index,
    PrimaryColumn,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity()
  export class TermsAndConditions extends BaseEntity {
    @PrimaryColumn("uuid")
    termsAndConditionId!: string;
    
    @PrimaryColumn("uuid")
    organizationId!: string;

    @Column("varchar")
    organizationType: string;

  
    @Column("boolean", { default: true })
    isVisible: boolean;
  
    @Column({ type: "varchar" })
    termsAndConditionName: string;
  
    @Column({ type: "varchar"})
    termsAndConditionCategory: string;
  
    @Column({ type: "varchar"})
    termsAndConditionContentUrl: string;
  
    @Column({ type: "varchar" })
    createdBy: string;
  
    @Column({ type: "bigint", nullable: false })
    createdAt: number;
  
    @Column({ type: "varchar", nullable: true })
    updatedBy: string;
  
    @Column({ type: "bigint", nullable: false })
    updatedAt: number;

    @Column({ type: "bigint", nullable: true })
    deletedAt: number;
  
    @BeforeInsert()
    updateTimestampsOnInsert() {
      const now = Date.now();
      this.createdAt = now;
      this.updatedAt = now;
    }
  
    @BeforeUpdate()
    updateTimestampsOnUpdate() {
      const now = Date.now();
      this.updatedAt = now;
    }
  }
  