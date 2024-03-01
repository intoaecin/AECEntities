import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@Index(["organizationId"])
export class AutopilotTriggers extends BaseEntity {
  // auto generated UUID from database
  @PrimaryGeneratedColumn("uuid")
  triggerId!: string;

  // Trigger to occur on which event?
  @Column({ type: "varchar", nullable: false })
  triggerEventType!: string;

  // Trigger is from which microservice
  @Column({ type: "varchar", nullable: false })
  triggerEventSource: string;

  // Name of the trigger
  @Column({ type: "varchar", nullable: true })
  triggerName: string;

  // Trigger type, possible values are CUSTOM (OR) DEFAULT
  @Column({ type: "varchar", default: "CUSTOM" })
  triggerType: string;

  // Description about the trigger on what it does
  @Column({ type: "varchar", nullable: true })
  triggerDesc: string;

  // status of the trigger, whether it is active or not
  @Column({ type: "boolean", default: true })
  isActive: boolean;

  // The Id of the organization the user belongs to
  @Column({ type: "uuid", nullable: false })
  organizationId!: string;

  // The type of the organization to which the user belongs to (Architect, Vendor...)
  @Column({ type: "varchar", nullable: false })
  organizationType!: string;

  /* List of all the condition columns*/
  @Column({ type: "varchar", nullable: true })
  conditionColumn1: string;

  @Column({ type: "varchar", nullable: true })
  conditionValue1: string;

  @Column({ type: "varchar", nullable: true })
  conditionColumn2: string;

  @Column({ type: "varchar", nullable: true })
  conditionValue2: string;

  @Column({ type: "varchar", nullable: true })
  conditionColumn3: string;

  @Column({ type: "varchar", nullable: true })
  conditionValue3: string;

  @Column({ type: "varchar", nullable: true })
  conditionColumn4: string;

  @Column({ type: "varchar", nullable: true })
  conditionValue4: string;

  // Represents whether the email has to be sent on this trigger
  @Column({ type: "boolean", default: false })
  isSendEmail!: boolean;

  @Column({ type: "boolean", default: false })
  isQuestionnaireEmail!: boolean;

  @Column({ type: "varchar", nullable: true })
  questionnaireId: string;

  @Column({ type: "boolean", default: false })
  isArchitectCalendarAvailabilityEmail!: boolean;

  // template Id of the email to be sent on this trigger
  @Column({ type: "uuid", nullable: true })
  emailTemplateId: string;

  // Represents whether to change the status on this trigger
  @Column({ type: "boolean", default: false })
  isChangeStatus!: boolean;

  // target status to update after performing this trigger action
  @Column({ type: "varchar", nullable: true })
  targetStatus: string;

  // Represent to change the project stage
  @Column({ type: "boolean", default: true })
  isChangeStage!: boolean;

  // target stage to update after performing this trigger action
  @Column({ type: "varchar", nullable: true })
  targetStage: string;

  // Represents whether the email has to be sent on this trigger
  @Column({ type: "boolean", default: false })
  isSendRemainder!: boolean;

  // template Id of the remainder to be sent on this trigger
  @Column({ type: "uuid", nullable: true })
  remainderTemplateId: string;

  // Represents if the trigger is a followup trigger or not
  @Column({ type: "boolean", default: false })
  isFollowUpTrigger!: boolean;

  @Column({ type: "varchar", nullable: true })
  followUpName: string;

  // Do follow up after how many days?
  @Column({ type: "varchar", nullable: true })
  followUpDays: string;

  // order in the followup chain
  @Column({ type: "uuid", nullable: true })
  followUpSetId: string;

  // order in the followup chain
  @Column({ type: "varchar", nullable: true })
  followUpSetOrder: string;

  // template Id of the followup to be sent on this trigger
  @Column({ type: "uuid", nullable: true })
  followUpTemplateId: string;

  @Column({ type: "bigint", nullable: false })
  lastReadAt: number;

  @Column({ type: "varchar" })
  createdBy: string;

  @Column({ type: "bigint", nullable: false })
  createdAt: number;

  @Column({ type: "varchar", nullable: true })
  updatedBy: string;

  @Column({ type: "bigint", nullable: false })
  updatedAt: number;

  @BeforeUpdate()
  updateManagedAt(): void {
    this.updatedAt = Date.now();
  }

  @BeforeInsert()
  updateTimestampsOnInsert() {
    const now = Date.now();
    this.createdAt = now;
    this.updatedAt = now;
    this.lastReadAt = now;
  }
}
