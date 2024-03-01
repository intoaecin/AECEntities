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
  export class ProposalTemplate extends BaseEntity {
    @PrimaryColumn("uuid")
    proposalId!: string;
    
    @PrimaryColumn("uuid")
    organizationId!: string;

    @Column("varchar")
    organizationType: string;

  
    @Column("boolean", { default: true })
    isVisible: boolean;
  
    @Column({ type: "varchar" })
    proposalTitle: string;
  
    @Column({ type: "varchar"})
    proposalTemplateContentUrl: string;

    @Column({type: "varchar"})
    proposalTemplateType: string;

    @Column({type: "varchar",nullable:true})
    proposalTemplateDescription: string;

    @Column({type: "json",nullable:true})
    macros: any;
  
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
  