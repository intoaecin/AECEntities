import {
  Entity,
  Column,
  Index,
  BaseEntity,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from "typeorm";

@Entity()
@Index(["userId"])
@Index(["logSource"])
@Index(["organizationId"])
export class Activities extends BaseEntity {
  // auto generated UUID from database
  @PrimaryGeneratedColumn("uuid")
  activityId!: string;

  // The Id of the user who is performing the activity
  @Column({ type: "uuid", nullable: true })
  userId: string;

  // The Role of the user who is performing the activity
  @Column({ type: "varchar", nullable: true })
  userDesignation?: string;

  @Column({
    name: "userRole",
    type: "varchar",
    nullable: true,
    default: null,
  })
  userRole: string;

  // The Id of the organization the user belongs to
  @Column({ type: "uuid", nullable: true })
  organizationId: string;

  /* The entityId (can be questiannaireId or projectId... etc)
    which is being affected because of this activity that the user performs */
  @Column({ type: "uuid", nullable: true })
  entityId: string;

  /* The Id of the lead to which this activity is intended to
   */
  @Column({ type: "uuid", nullable: true })
  leadId: string;

  /* The Id of the project to which this activity is intended to
   */
  @Column({ type: "uuid", nullable: true })
  projectId: string;

  /* The searchField1 (can be used as a secondary entityId. When there is a need of two entityId this field can be used)
    which is being affected because of this activity that the user performs */
  @Column({ type: "uuid", nullable: true })
  searchField1?: string;

  /* The searchField2 (can be used as a secondary entityId. When there is a need of third entityId this field can be used)
    which is being affected because of this activity that the user performs */
  @Column({ type: "uuid", nullable: true })
  searchField2?: string;

  // The name corresponding to entityId (if applicable)
  @Column({ type: "varchar", nullable: true })
  entityName: string;

  // The type of the organization to which the user belongs to (Architect, Vendor...)
  @Column({
    name: "organizationType",
    type: "varchar",
    nullable: true,
  })
  organizationType: string;

  // Name of the event that is taking place because of the activity performed by the user
  @Column({
    name: "logEvent",
    type: "varchar",
    nullable: false,
  })
  logEvent!: string;

  // Human understandable text that describes the activity performed
  @Column({
    name: "logMessage",
    type: "varchar",
    nullable: true,
  })
  logMessage!: string;

  /* Detailed description about the activity 
  or the comments provided by the user while performing the activity */
  @Column({
    name: "logDescription",
    type: "varchar",
    nullable: true,
  })
  logDescription: string;

  /* The value can be either INTERNAL (or) EXTERNAL 
    INTERNAL - This logtype is just for the refernce to the internal team or the application admin users
    EXTERNAL - This type of activities are customer facing which are displayed in the customer UI 
  */
  @Column({
    name: "logType",
    type: "varchar",
    nullable: true,
    default: "external",
  })
  logType: string;

  // The module that this activity belongs to(LEAD_MANAGER, USERHUB...etc )
  @Column({
    name: "logSource",
    type: "varchar",
    nullable: false,
  })
  logSource!: string;

  /* FALSE - when the new data being inserted into the application, can be a new lead, new user.. etc 
     TRUE - when the data is existing in the application and because of the activity by the user 
     the data is being modified. In this case, both historicalData and currentData would be mandatory
  */
  @Column({
    name: "isExistingData",
    type: "boolean",
    default: false,
  })
  isExistingData: boolean;

  /* This would be the previous state of the entity before modification.
    The value should be the json array of pervious state properties which are modified because of the current activity
  */
  @Column({
    name: "historicalData",
    type: "varchar",
    nullable: true,
    default: null,
  })
  historicalData: string;

  /* This property carries the current state of the entity after the modification.
    The value should be the json array of the properties of the current state
  */
  @Column({
    name: "currentData",
    type: "varchar",
    nullable: true,
    default: null,
  })
  currentData: string;

  // The request passed to the api to carry out the current activity
  @Column({
    name: "requestJson",
    type: "varchar",
    nullable: true,
    default: null,
  })
  requestJson: string;

  // The response obtained from the api corresponding the the request
  @Column({
    name: "responseJson",
    type: "varchar",
    nullable: true,
    default: null,
  })
  responseJson: string;

  // The browser location of the user from where the activity is performed
  @Column({
    name: "location",
    type: "varchar",
    nullable: true,
    default: null,
  })
  location: string;

  // The ipAddress of the user when they performed this activity
  @Column({
    name: "ipAddress",
    type: "varchar",
    nullable: true,
    default: null,
  })
  ipAddress: string;

  // The name of the user who performed this activity (or) the name of the corresponding userId
  @Column({ type: "varchar", nullable: false })
  createdBy: string;

  // The time at which the activity is performed
  @Column({ type: "bigint", nullable: false })
  createdAt: number;
}
