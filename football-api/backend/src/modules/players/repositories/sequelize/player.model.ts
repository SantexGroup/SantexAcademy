// modules/players/repositories/sequelize/player.model.ts
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ tableName: 'players', timestamps: false })
export class PlayerModel extends Model<PlayerModel> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare id: number;

  @Column({ field: 'fifa_version', type: DataType.STRING })
  declare fifaVersion: string;

  @Column({ field: 'fifa_update', type: DataType.STRING })
  declare fifaUpdate: string;

  @Column({ field: 'player_face_url', type: DataType.STRING })
  declare playerFaceUrl: string;

  @Column({ field: 'long_name', type: DataType.STRING })
  declare longName: string;

  @Column({ field: 'player_positions', type: DataType.STRING })
  declare playerPositions: string;

  @Column({ field: 'club_name', type: DataType.STRING, allowNull: true })
  declare clubName?: string;

  @Column({ field: 'nationality_name', type: DataType.STRING, allowNull: true })
  declare nationalityName?: string;

  @Column(DataType.INTEGER)
  declare overall: number;

  @Column(DataType.INTEGER)
  declare potential: number;

  @Column({ field: 'value_eur', type: DataType.INTEGER, allowNull: true })
  declare valueEur?: number;

  @Column({ field: 'wage_eur', type: DataType.INTEGER, allowNull: true })
  declare wageEur?: number;

  @Column(DataType.INTEGER)
  declare age: number;

  @Column({ field: 'height_cm', type: DataType.INTEGER, allowNull: true })
  declare heightCm?: number;

  @Column({ field: 'weight_kg', type: DataType.INTEGER, allowNull: true })
  weightKg?: number;

  @Column({ field: 'preferred_foot', type: DataType.STRING, allowNull: true })
  preferredFoot?: string;

  @Column({ field: 'weak_foot', type: DataType.INTEGER, allowNull: true })
  weakFoot?: number;

  @Column({ field: 'skill_moves', type: DataType.INTEGER, allowNull: true })
  skillMoves?: number;

  @Column({
    field: 'international_reputation',
    type: DataType.INTEGER,
    allowNull: true,
  })
  internationalReputation?: number;

  @Column({ field: 'work_rate', type: DataType.STRING, allowNull: true })
  workRate?: string;

  @Column({ field: 'body_type', type: DataType.STRING, allowNull: true })
  bodyType?: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  pace?: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  shooting?: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  passing?: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  dribbling?: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  defending?: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  physic?: number;

  @Column({
    field: 'attacking_crossing',
    type: DataType.INTEGER,
    allowNull: true,
  })
  attackingCrossing?: number;

  @Column({
    field: 'attacking_finishing',
    type: DataType.INTEGER,
    allowNull: true,
  })
  attackingFinishing?: number;

  @Column({
    field: 'attacking_heading_accuracy',
    type: DataType.INTEGER,
    allowNull: true,
  })
  attackingHeadingAccuracy?: number;

  @Column({
    field: 'attacking_short_passing',
    type: DataType.INTEGER,
    allowNull: true,
  })
  attackingShortPassing?: number;

  @Column({
    field: 'attacking_volleys',
    type: DataType.INTEGER,
    allowNull: true,
  })
  attackingVolleys?: number;

  @Column({ field: 'skill_dribbling', type: DataType.INTEGER, allowNull: true })
  skillDribbling?: number;

  @Column({ field: 'skill_curve', type: DataType.INTEGER, allowNull: true })
  skillCurve?: number;

  @Column({
    field: 'skill_fk_accuracy',
    type: DataType.INTEGER,
    allowNull: true,
  })
  skillFkAccuracy?: number;

  @Column({
    field: 'skill_long_passing',
    type: DataType.INTEGER,
    allowNull: true,
  })
  skillLongPassing?: number;

  @Column({
    field: 'skill_ball_control',
    type: DataType.INTEGER,
    allowNull: true,
  })
  skillBallControl?: number;

  @Column({
    field: 'movement_acceleration',
    type: DataType.INTEGER,
    allowNull: true,
  })
  movementAcceleration?: number;

  @Column({
    field: 'movement_sprint_speed',
    type: DataType.INTEGER,
    allowNull: true,
  })
  movementSprintSpeed?: number;

  @Column({
    field: 'movement_agility',
    type: DataType.INTEGER,
    allowNull: true,
  })
  movementAgility?: number;

  @Column({
    field: 'movement_reactions',
    type: DataType.INTEGER,
    allowNull: true,
  })
  movementReactions?: number;

  @Column({
    field: 'movement_balance',
    type: DataType.INTEGER,
    allowNull: true,
  })
  movementBalance?: number;

  @Column({
    field: 'power_shot_power',
    type: DataType.INTEGER,
    allowNull: true,
  })
  powerShotPower?: number;

  @Column({ field: 'power_jumping', type: DataType.INTEGER, allowNull: true })
  powerJumping?: number;

  @Column({ field: 'power_stamina', type: DataType.INTEGER, allowNull: true })
  powerStamina?: number;

  @Column({ field: 'power_strength', type: DataType.INTEGER, allowNull: true })
  powerStrength?: number;

  @Column({
    field: 'power_long_shots',
    type: DataType.INTEGER,
    allowNull: true,
  })
  powerLongShots?: number;

  @Column({
    field: 'mentality_aggression',
    type: DataType.INTEGER,
    allowNull: true,
  })
  mentalityAggression?: number;

  @Column({
    field: 'mentality_interceptions',
    type: DataType.INTEGER,
    allowNull: true,
  })
  mentalityInterceptions?: number;

  @Column({
    field: 'mentality_positioning',
    type: DataType.INTEGER,
    allowNull: true,
  })
  mentalityPositioning?: number;

  @Column({
    field: 'mentality_vision',
    type: DataType.INTEGER,
    allowNull: true,
  })
  mentalityVision?: number;

  @Column({
    field: 'mentality_penalties',
    type: DataType.INTEGER,
    allowNull: true,
  })
  mentalityPenalties?: number;

  @Column({
    field: 'mentality_composure',
    type: DataType.INTEGER,
    allowNull: true,
  })
  mentalityComposure?: number;

  @Column({
    field: 'defending_marking',
    type: DataType.INTEGER,
    allowNull: true,
  })
  defendingMarking?: number;

  @Column({
    field: 'defending_standing_tackle',
    type: DataType.INTEGER,
    allowNull: true,
  })
  defendingStandingTackle?: number;

  @Column({
    field: 'defending_sliding_tackle',
    type: DataType.INTEGER,
    allowNull: true,
  })
  defendingSlidingTackle?: number;

  @Column({
    field: 'goalkeeping_diving',
    type: DataType.INTEGER,
    allowNull: true,
  })
  goalkeepingDiving?: number;

  @Column({
    field: 'goalkeeping_handling',
    type: DataType.INTEGER,
    allowNull: true,
  })
  goalkeepingHandling?: number;

  @Column({
    field: 'goalkeeping_kicking',
    type: DataType.INTEGER,
    allowNull: true,
  })
  goalkeepingKicking?: number;

  @Column({
    field: 'goalkeeping_positioning',
    type: DataType.INTEGER,
    allowNull: true,
  })
  goalkeepingPositioning?: number;

  @Column({
    field: 'goalkeeping_reflexes',
    type: DataType.INTEGER,
    allowNull: true,
  })
  goalkeepingReflexes?: number;

  @Column({
    field: 'goalkeeping_speed',
    type: DataType.INTEGER,
    allowNull: true,
  })
  goalkeepingSpeed?: number;

  @Column({ field: 'player_traits', type: DataType.STRING, allowNull: true })
  playerTraits?: string;
}
