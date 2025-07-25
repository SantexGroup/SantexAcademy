import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * @description
 * Represents the Player entity as it is stored in the database.
 * This class uses TypeORM decorators to map to the 'players' table.
 * It serves as the Data Transfer Object (DTO) for database interactions.
 */
@Entity('players')
export class PlayerDto {
  /**
   * @description
   * The unique identifier for the player.
   * Auto-generated primary key.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * @description
   * The FIFA version associated with the player data (e.g., '23', '24').
   */
  @Column({
    name: 'fifa_version',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  fifaVersion: string;

  /**
   * @description
   * The specific update or patch version for the FIFA data.
   */
  @Column({
    name: 'fifa_update',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  fifaUpdate: string;

  /**
   * @description
   * URL to the player's face image.
   */
  @Column({
    name: 'player_face_url',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  playerFaceUrl: string;

  /**
   * @description
   * The full name of the player.
   */
  @Column({ name: 'long_name', type: 'varchar', length: 255, nullable: false })
  longName: string;

  /**
   * @description
   * Comma-separated string of player's preferred positions (e.g., 'ST, CF, LW').
   */
  @Column({
    name: 'player_positions',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  playerPositions: string;

  /**
   * @description
   * The name of the club the player belongs to. Nullable.
   */
  @Column({ name: 'club_name', type: 'varchar', length: 255, nullable: true })
  clubName?: string;

  /**
   * @description
   * The nationality of the player. Nullable.
   */
  @Column({
    name: 'nationality_name',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  nationalityName?: string;

  /**
   * @description
   * The player's overall rating.
   */
  @Column({ type: 'int', nullable: false })
  overall: number;

  /**
   * @description
   * The player's potential rating.
   */
  @Column({ type: 'int', nullable: false })
  potential: number;

  /**
   * @description
   * Player's market value in Euros. Nullable.
   */
  @Column({ name: 'value_eur', type: 'int', nullable: true })
  valueEur?: number;

  /**
   * @description
   * Player's weekly wage in Euros. Nullable.
   */
  @Column({ name: 'wage_eur', type: 'int', nullable: true })
  wageEur?: number;

  /**
   * @description
   * Player's age.
   */
  @Column({ type: 'int', nullable: false })
  age: number;

  /**
   * @description
   * Player's height in centimeters. Nullable.
   */
  @Column({ name: 'height_cm', type: 'int', nullable: true })
  heightCm?: number;

  /**
   * @description
   * Player's weight in kilograms. Nullable.
   */
  @Column({ name: 'weight_kg', type: 'int', nullable: true })
  weightKg?: number;

  /**
   * @description
   * Player's preferred foot (e.g., 'Right', 'Left'). Nullable.
   */
  @Column({
    name: 'preferred_foot',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  preferredFoot?: string;

  /**
   * @description
   * Player's weak foot rating (1-5 stars). Nullable.
   */
  @Column({ name: 'weak_foot', type: 'int', nullable: true })
  weakFoot?: number;

  /**
   * @description
   * Player's skill moves rating (1-5 stars). Nullable.
   */
  @Column({ name: 'skill_moves', type: 'int', nullable: true })
  skillMoves?: number;

  /**
   * @description
   * Player's international reputation (1-5 stars). Nullable.
   */
  @Column({ name: 'international_reputation', type: 'int', nullable: true })
  internationalReputation?: number;

  /**
   * @description
   * Player's work rate (e.g., 'High/Medium'). Nullable.
   */
  @Column({ name: 'work_rate', type: 'varchar', length: 255, nullable: true })
  workRate?: string;

  /**
   * @description
   * Player's body type (e.g., 'Lean', 'Normal', 'Stocky'). Nullable.
   */
  @Column({ name: 'body_type', type: 'varchar', length: 255, nullable: true })
  bodyType?: string;

  /**
   * @description
   * Player's pace attribute. Nullable.
   */
  @Column({ type: 'int', nullable: true })
  pace?: number;

  /**
   * @description
   * Player's shooting attribute. Nullable.
   */
  @Column({ type: 'int', nullable: true })
  shooting?: number;

  /**
   * @description
   * Player's passing attribute. Nullable.
   */
  @Column({ type: 'int', nullable: true })
  passing?: number;

  /**
   * @description
   * Player's dribbling attribute. Nullable.
   */
  @Column({ type: 'int', nullable: true })
  dribbling?: number;

  /**
   * @description
   * Player's defending attribute. Nullable.
   */
  @Column({ type: 'int', nullable: true })
  defending?: number;

  /**
   * @description
   * Player's physic attribute. Nullable.
   */
  @Column({ type: 'int', nullable: true })
  physic?: number;

  /**
   * @description
   * Player's attacking crossing attribute. Nullable.
   */
  @Column({ name: 'attacking_crossing', type: 'int', nullable: true })
  attackingCrossing?: number;

  /**
   * @description
   * Player's attacking finishing attribute. Nullable.
   */
  @Column({ name: 'attacking_finishing', type: 'int', nullable: true })
  attackingFinishing?: number;

  /**
   * @description
   * Player's attacking heading accuracy attribute. Nullable.
   */
  @Column({ name: 'attacking_heading_accuracy', type: 'int', nullable: true })
  attackingHeadingAccuracy?: number;

  /**
   * @description
   * Player's attacking short passing attribute. Nullable.
   */
  @Column({ name: 'attacking_short_passing', type: 'int', nullable: true })
  attackingShortPassing?: number;

  /**
   * @description
   * Player's attacking volleys attribute. Nullable.
   */
  @Column({ name: 'attacking_volleys', type: 'int', nullable: true })
  attackingVolleys?: number;

  /**
   * @description
   * Player's skill dribbling attribute. Nullable.
   */
  @Column({ name: 'skill_dribbling', type: 'int', nullable: true })
  skillDribbling?: number;

  /**
   * @description
   * Player's skill curve attribute. Nullable.
   */
  @Column({ name: 'skill_curve', type: 'int', nullable: true })
  skillCurve?: number;

  /**
   * @description
   * Player's skill free kick accuracy attribute. Nullable.
   */
  @Column({ name: 'skill_fk_accuracy', type: 'int', nullable: true })
  skillFkAccuracy?: number;

  /**
   * @description
   * Player's skill long passing attribute. Nullable.
   */
  @Column({ name: 'skill_long_passing', type: 'int', nullable: true })
  skillLongPassing?: number;

  /**
   * @description
   * Player's skill ball control attribute. Nullable.
   */
  @Column({ name: 'skill_ball_control', type: 'int', nullable: true })
  skillBallControl?: number;

  /**
   * @description
   * Player's movement acceleration attribute. Nullable.
   */
  @Column({ name: 'movement_acceleration', type: 'int', nullable: true })
  movementAcceleration?: number;

  /**
   * @description
   * Player's movement sprint speed attribute. Nullable.
   */
  @Column({ name: 'movement_sprint_speed', type: 'int', nullable: true })
  movementSprintSpeed?: number;

  /**
   * @description
   * Player's movement agility attribute. Nullable.
   */
  @Column({ name: 'movement_agility', type: 'int', nullable: true })
  movementAgility?: number;

  /**
   * @description
   * Player's movement reactions attribute. Nullable.
   */
  @Column({ name: 'movement_reactions', type: 'int', nullable: true })
  movementReactions?: number;

  /**
   * @description
   * Player's movement balance attribute. Nullable.
   */
  @Column({ name: 'movement_balance', type: 'int', nullable: true })
  movementBalance?: number;

  /**
   * @description
   * Player's power shot power attribute. Nullable.
   */
  @Column({ name: 'power_shot_power', type: 'int', nullable: true })
  powerShotPower?: number;

  /**
   * @description
   * Player's power jumping attribute. Nullable.
   */
  @Column({ name: 'power_jumping', type: 'int', nullable: true })
  powerJumping?: number;

  /**
   * @description
   * Player's power stamina attribute. Nullable.
   */
  @Column({ name: 'power_stamina', type: 'int', nullable: true })
  powerStamina?: number;

  /**
   * @description
   * Player's power strength attribute. Nullable.
   */
  @Column({ name: 'power_strength', type: 'int', nullable: true })
  powerStrength?: number;

  /**
   * @description
   * Player's power long shots attribute. Nullable.
   */
  @Column({ name: 'power_long_shots', type: 'int', nullable: true })
  powerLongShots?: number;

  /**
   * @description
   * Player's mentality aggression attribute. Nullable.
   */
  @Column({ name: 'mentality_aggression', type: 'int', nullable: true })
  mentalityAggression?: number;

  /**
   * @description
   * Player's mentality interceptions attribute. Nullable.
   */
  @Column({ name: 'mentality_interceptions', type: 'int', nullable: true })
  mentalityInterceptions?: number;

  /**
   * @description
   * Player's mentality positioning attribute. Nullable.
   */
  @Column({ name: 'mentality_positioning', type: 'int', nullable: true })
  mentalityPositioning?: number;

  /**
   * @description
   * Player's mentality vision attribute. Nullable.
   */
  @Column({ name: 'mentality_vision', type: 'int', nullable: true })
  mentalityVision?: number;

  /**
   * @description
   * Player's mentality penalties attribute. Nullable.
   */
  @Column({ name: 'mentality_penalties', type: 'int', nullable: true })
  mentalityPenalties?: number;

  /**
   * @description
   * Player's mentality composure attribute. Nullable.
   */
  @Column({ name: 'mentality_composure', type: 'int', nullable: true })
  mentalityComposure?: number;

  /**
   * @description
   * Player's defending marking attribute. Nullable.
   */
  @Column({ name: 'defending_marking', type: 'int', nullable: true })
  defendingMarking?: number;

  /**
   * @description
   * Player's defending standing tackle attribute. Nullable.
   */
  @Column({ name: 'defending_standing_tackle', type: 'int', nullable: true })
  defendingStandingTackle?: number;

  /**
   * @description
   * Player's defending sliding tackle attribute. Nullable.
   */
  @Column({ name: 'defending_sliding_tackle', type: 'int', nullable: true })
  defendingSlidingTackle?: number;

  /**
   * @description
   * Goalkeeping diving attribute. Nullable.
   */
  @Column({ name: 'goalkeeping_diving', type: 'int', nullable: true })
  goalkeepingDiving?: number;

  /**
   * @description
   * Goalkeeping handling attribute. Nullable.
   */
  @Column({ name: 'goalkeeping_handling', type: 'int', nullable: true })
  goalkeepingHandling?: number;

  /**
   * @description
   * Goalkeeping kicking attribute. Nullable.
   */
  @Column({ name: 'goalkeeping_kicking', type: 'int', nullable: true })
  goalkeepingKicking?: number;

  /**
   * @description
   * Goalkeeping positioning attribute. Nullable.
   */
  @Column({ name: 'goalkeeping_positioning', type: 'int', nullable: true })
  goalkeepingPositioning?: number;

  /**
   * @description
   * Goalkeeping reflexes attribute. Nullable.
   */
  @Column({ name: 'goalkeeping_reflexes', type: 'int', nullable: true })
  goalkeepingReflexes?: number;

  /**
   * @description
   * Goalkeeping speed attribute. Nullable.
   */
  @Column({ name: 'goalkeeping_speed', type: 'int', nullable: true })
  goalkeepingSpeed?: number;

  /**
   * @description
   * Comma-separated string of player traits. Nullable.
   */
  @Column({
    name: 'player_traits',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  playerTraits?: string;
}
